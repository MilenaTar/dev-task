import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
    const quickLinks = [
        { path: '/', label: 'Exchange Rates', icon: '💰', description: 'View live currency rates' },
        {
            path: '/about',
            label: 'About Us',
            icon: 'ℹ️',
            description: 'Learn more about our platform',
        },
        { path: '/contact', label: 'Contact', icon: '📧', description: 'Get in touch with us' },
    ];

    return (
        <div className="max-w-4xl mx-auto text-center">
            <div className="py-20">
                {/* 404 Animation */}
                <div className="mb-8">
                    <div className="relative">
                        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-pulse">
                            404
                        </h1>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="text-6xl animate-bounce">🔍</div>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
                    <p className="text-lg text-gray-600 mb-2">
                        The page you're looking for seems to have wandered off...
                    </p>
                    <p className="text-gray-500 max-w-md mx-auto">
                        It might have been moved, deleted, or you entered the wrong URL. Don't
                        worry, let's get you back on track! 🚀
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <span>🏠</span>
                        <span>Take Me Home</span>
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">
                        Or explore these popular pages:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                                    {link.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                    {link.label}
                                </h4>
                                <p className="text-sm text-gray-600">{link.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Fun Facts */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Fun Fact</h3>
                    <p className="text-gray-700">
                        The HTTP 404 error code was named after room 404 at CERN, where the World
                        Wide Web was born. The room contained the central database, and when it was
                        down, users got a "404" error!
                    </p>
                </div>
            </div>
        </div>
    );
};
