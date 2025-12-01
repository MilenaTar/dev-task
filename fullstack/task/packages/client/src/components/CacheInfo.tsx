import React from 'react';

interface Props {
    fetchedAt: string;
}

export const CacheInfo: React.FC<Props> = ({ fetchedAt }) => {
    const now = new Date();
    const fetched = new Date(fetchedAt);
    const diffMinutes = Math.floor((now.getTime() - fetched.getTime()) / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const remainingMinutes = diffMinutes % 60;

    const formatTimeDifference = () => {
        if (diffMinutes < 1) {
            return 'just now';
        } else if (diffMinutes < 60) {
            return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            const hourText = `${diffHours} hour${diffHours > 1 ? 's' : ''}`;
            const minuteText =
                remainingMinutes > 0
                    ? ` and ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
                    : '';
            return `${hourText}${minuteText} ago`;
        } else {
            return fetched.toLocaleString();
        }
    };

    const getStatusColor = () => {
        if (diffMinutes < 30) return 'text-green-600 bg-green-50 border-green-200';
        if (diffMinutes < 120) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        return 'text-orange-600 bg-orange-50 border-orange-200';
    };

    return (
        <div className="flex justify-center mb-8">
            <div
                className={`inline-flex items-center space-x-3 px-6 py-3 rounded-xl border backdrop-blur-sm ${getStatusColor()}`}
            >
                <div className="text-sm">
                    <span className="font-semibold">Last updated:</span>{' '}
                    <span className="font-bold">{formatTimeDifference()}</span>
                </div>
                <div className="h-4 w-px bg-current opacity-30"></div>
                <div className="text-xs opacity-75">
                    {fetched.toLocaleTimeString()} • {fetched.toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};
