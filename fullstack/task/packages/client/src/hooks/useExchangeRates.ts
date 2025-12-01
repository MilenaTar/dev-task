import { gql, useQuery } from '@apollo/client';

export const EXCHANGE_RATES_QUERY = gql`
    query ExchangeRates {
        exchangeRates {
            currencyCode
            rate
            country
            currency
            amount
            updatedAtUtc
        }
    }
`;

export interface ExchangeRate {
    currencyCode: string;
    rate: number;
    country: string;
    currency: string;
    amount: number;
    updatedAtUtc: string;
}

export const useExchangeRates = () => {
    const { data, loading, error } = useQuery<{ exchangeRates: ExchangeRate[] }>(
        EXCHANGE_RATES_QUERY,
        {
            pollInterval: 60000, // optional: refresh every 1 min
        }
    );

    return {
        rates: data?.exchangeRates ?? [],
        loading,
        error,
    };
};
