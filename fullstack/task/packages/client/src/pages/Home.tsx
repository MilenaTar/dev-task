import React from 'react';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { ExchangeRatesTable } from 'src/components/ExchangeRatesTable';
import { CacheInfo } from 'src/components/CacheInfo';

export const Home: React.FC = () => {
    const { rates, loading, error } = useExchangeRates();

    if (loading)
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg text-indigo-600 font-medium">Loading exchange rates...</p>
                    <p className="text-sm text-gray-500 mt-2">Fetching latest data from CNB</p>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-red-800 mb-2">Connection Error</h2>
                    <p className="text-red-600">{error.message}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );

    if (!rates.length)
        return (
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                    <div className="text-6xl mb-4">📊</div>
                    <h2 className="text-2xl font-bold text-yellow-800 mb-2">No Data Available</h2>
                    <p className="text-yellow-600">No exchange rates are currently available.</p>
                </div>
            </div>
        );

    const fetchedAt = rates[0].updatedAtUtc;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-5">
                <h5 className="text-2xl md:text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ">
                    Czech National Bank Exchange Rates
                </h5>
            </div>
            <div className="mb-8">
                <CacheInfo fetchedAt={fetchedAt} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/60 backdrop-blur-sm border border-indigo-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-indigo-600">Total Currencies</p>
                            <p className="text-3xl font-bold text-indigo-900">{rates.length}</p>
                        </div>
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🌍</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-purple-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-purple-600">Base Currency</p>
                            <p className="text-3xl font-bold text-purple-900">CZK</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🇨🇿</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-pink-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-pink-600">Data Source</p>
                            <p className="text-xl font-bold text-pink-900">CNB API</p>
                        </div>
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🏦</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exchange Rates Table with enhanced container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                                <span>📈</span>
                                <span>Exchange Rates</span>
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Current rates for foreign currencies in CZK
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span>Live Data</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <ExchangeRatesTable rates={rates} />
                </div>
            </div>
        </div>
    );
};
