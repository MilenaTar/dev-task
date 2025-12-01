import React from 'react';

export const About: React.FC = () => {
    const features = [
        { icon: '⚡', title: 'Real-time Data', description: 'Live exchange rates from CNB API' },
        { icon: '🚀', title: 'GraphQL Integration', description: 'Modern API with Apollo Client' },
        { icon: '💾', title: 'Smart Caching', description: 'Optimized performance with caching' },
        { icon: '📱', title: 'Responsive Design', description: 'Works perfectly on all devices' },
        { icon: '🔒', title: 'Type Safety', description: 'Full TypeScript implementation' },
        { icon: '🎨', title: 'Modern UI', description: 'Beautiful interface with Tailwind CSS' },
    ];

    const techStack = [
        {
            name: 'React 18',
            description: 'Modern React with hooks',
            color: 'bg-blue-500',
            icon: '⚛️',
        },
        {
            name: 'TypeScript',
            description: 'Type-safe development',
            color: 'bg-indigo-500',
            icon: '📘',
        },
        {
            name: 'Apollo Client',
            description: 'GraphQL state management',
            color: 'bg-purple-500',
            icon: '🚀',
        },
        {
            name: 'Tailwind CSS',
            description: 'Utility-first styling',
            color: 'bg-cyan-500',
            icon: '🎨',
        },
        { name: 'Vite', description: 'Fast build tool', color: 'bg-yellow-500', icon: '⚡' },
        {
            name: 'NestJS',
            description: 'Scalable backend framework',
            color: 'bg-red-500',
            icon: '🏗️',
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <span>ℹ️</span>
                    <span>About Us</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                    About Our Platform
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We provide real-time exchange rates from the Czech National Bank (CNB) through a
                    modern, fast, and reliable web application built with cutting-edge technologies.
                </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 border border-blue-100">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        To provide accurate, real-time currency exchange data in a user-friendly
                        format, helping individuals and businesses make informed financial decisions
                        with confidence.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    🚀 Platform Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    🛠️ Technology Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className={`w-10 h-10 ${tech.color} rounded-lg flex items-center justify-center mr-3`}
                                >
                                    <span className="text-white text-lg">{tech.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>
                            </div>
                            <p className="text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    📊 Platform Statistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            30+
                        </div>
                        <p className="text-gray-700 font-medium">Supported Currencies</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            24/7
                        </div>
                        <p className="text-gray-700 font-medium">Data Availability</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            99.9%
                        </div>
                        <p className="text-gray-700 font-medium">Uptime Reliability</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
