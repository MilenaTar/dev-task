import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

export interface CnbRateItem {
    country: string;
    currency: string;
    amount: number;
    currencyCode: string;
    rate: number;
    order: number;
    validFor: string;
}

export interface CnbDailyResponse {
    rates: CnbRateItem[];
}

@Injectable()
export class CnbApiClient {
    private readonly logger = new Logger(CnbApiClient.name);
    private readonly BASE_URL = 'https://api.cnb.cz/cnbapi/exrates/daily?lang=EN';

    async getLatestRates(): Promise<CnbDailyResponse> {
        try {
            this.logger.log(`Fetching CNB latest exchange rates...`);

            const response = await axios.get<CnbDailyResponse>(this.BASE_URL, {
                timeout: 8000,
                headers: {
                    Accept: 'application/json',
                },
            });

            return response.data;
        } catch (err) {
            this.logger.error('Failed to fetch CNB exchange rates', err);
            throw new Error('CNB API request failed');
        }
    }
}
