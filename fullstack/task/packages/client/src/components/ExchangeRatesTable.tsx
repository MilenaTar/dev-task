import React from 'react';
import { ExchangeRate } from '../hooks/useExchangeRates';

interface Props {
    rates: ExchangeRate[];
}

export const ExchangeRatesTable: React.FC<Props> = ({ rates }) => {
    return (
        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600 text-white sticky top-0 z-10">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Country</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Currency</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold">Amount</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Code</th>
                        <th className="px-6 py-3 text-right text-sm font-semibold">Rate</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {rates.map((rate, idx) => (
                        <tr
                            key={rate.currencyCode + idx}
                            className="hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-6 py-3">{rate.country}</td>
                            <td className="px-6 py-3">{rate.currency}</td>
                            <td className="px-6 py-3 text-right">{rate.amount}</td>
                            <td className="px-6 py-3">{rate.currencyCode}</td>
                            <td className="px-6 py-3 text-right">{rate.rate.toFixed(4)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
