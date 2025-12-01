import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/about', label: 'About', icon: 'ℹ️' },
        { path: '/contact', label: 'Contact', icon: '📧' },
    ];

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header with gradient background */}
            <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo with enhanced styling */}
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                                <span className="text-2xl">💰</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">CNB Exchange</h1>
                                <p className="text-xs text-indigo-100">Live Currency Rates</p>
                            </div>
                        </Link>

                        {/* Navigation items */}
                        <div className="flex space-x-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        isActive(item.path)
                                            ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg border border-white/30'
                                            : 'text-indigo-100 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    <span>{item.icon}</span>
                                    <span className="hidden sm:inline">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content with enhanced spacing */}
            <main className="py-12 px-4 sm:px-6 min-h-screen">{children}</main>

            {/* Footer with gradient */}
            <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white mt-auto">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-lg">💰</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">CNB Exchange Rates</p>
                                <p className="text-slate-400 text-xs">
                                    © 2025 • Data by Czech National Bank
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <Link
                                to="/about"
                                className="text-slate-300 hover:text-indigo-400 transition-colors duration-200 flex items-center space-x-1"
                            >
                                <span>ℹ️</span>
                                <span>About</span>
                            </Link>
                            <Link
                                to="/contact"
                                className="text-slate-300 hover:text-purple-400 transition-colors duration-200 flex items-center space-x-1"
                            >
                                <span>📧</span>
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative bottom line */}
                    <div className="mt-6 pt-4 border-t border-slate-700">
                        <div className="flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
