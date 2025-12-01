import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, MoreThan, IsNull } from 'typeorm';
import { ExchangeRate } from '../../entities';
import { CnbApiClient, CnbDailyResponse } from './cnb-api.client';

@Injectable()
export class ExchangeRateService {
    private readonly logger = new Logger(ExchangeRateService.name);
    private fetchingPromise: Promise<ExchangeRate[]> | null = null;
    private readonly CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

    constructor(
        @InjectRepository(ExchangeRate)
        private readonly repo: Repository<ExchangeRate>,
        private readonly dataSource: DataSource,
        private readonly cnbApi: CnbApiClient
    ) {}

    async getRates(): Promise<ExchangeRate[]> {
        const now = new Date();
        const fiveMinutesAgo = new Date(now.getTime() - this.CACHE_TTL_MS);
        const freshRates = await this.repo.find({
            where: {
                updatedAtUtc: MoreThan(fiveMinutesAgo),
                deleteDateUtc: IsNull(),
            },
            order: { currencyCode: 'ASC' },
        });

        if (freshRates.length > 0) {
            this.logger.log(`Cache hit: returning ${freshRates.length} cached rates`);
            return freshRates;
        }

        if (this.fetchingPromise) {
            this.logger.log('Another request is fetching rates, waiting...');
            return this.fetchingPromise;
        }

        this.logger.log('Cache expired, fetching fresh data from CNB API...');

        this.fetchingPromise = this.fetchAndCacheRates().finally(() => {
            this.fetchingPromise = null;
        });

        return this.fetchingPromise;
    }

    private async fetchAndCacheRates(): Promise<ExchangeRate[]> {
        this.logger.log('Fetching fresh exchange rates from CNB API...');

        try {
            const apiData: CnbDailyResponse = await this.cnbApi.getLatestRates();
            this.logger.log(`CNB API Response - Rates count: ${apiData?.rates?.length}`);

            if (!apiData?.rates?.length) {
                throw new Error('No rates received from CNB API');
            }

            const entities = apiData.rates.map((r) => ({
                country: r.country,
                currency: r.currency,
                amount: r.amount,
                currencyCode: r.currencyCode,
                rate: r.rate,
                validFor: new Date(r.validFor),
            }));

            let upsertedCount = 0;
            await this.dataSource.transaction(async (manager) => {
                for (const entity of entities) {
                    const existing = await manager.findOne(ExchangeRate, {
                        where: { currencyCode: entity.currencyCode },
                    });

                    if (existing) {
                        await manager.update(ExchangeRate, { id: existing.id }, entity);
                    } else {
                        await manager.insert(ExchangeRate, entity);
                    }
                    upsertedCount++;
                }
            });

            this.logger.log(`Successfully upserted ${upsertedCount} exchange rates`);

            return this.repo.find({
                where: { deleteDateUtc: IsNull() },
                order: { currencyCode: 'ASC' },
            });
        } catch (error) {
            this.logger.error('Failed to fetch exchange rates', error);

            // Return existing cached data if available (even if stale)
            try {
                const existingRates = await this.repo
                    .createQueryBuilder('rate')
                    .where('rate.deleteDateUtc IS NULL')
                    .orderBy('rate.currencyCode', 'ASC')
                    .getMany();

                if (existingRates.length > 0) {
                    this.logger.warn(
                        `Returning ${existingRates.length} cached rates due to API failure`
                    );
                    return existingRates;
                }
            } catch (fallbackError) {
                this.logger.error('Failed to fetch fallback rates', fallbackError);
            }

            throw error;
        }
    }
}
