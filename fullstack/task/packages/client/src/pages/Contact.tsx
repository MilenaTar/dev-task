import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form or show success message
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            value: 'info@cnbexchange.com',
            description: 'Send us an email anytime',
            color: 'from-blue-500 to-indigo-500',
        },
        {
            icon: '📞',
            title: 'Phone',
            value: '+420 123 456 789',
            description: 'Call us during business hours',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: '📍',
            title: 'Address',
            value: 'Wenceslas Square 1, Prague',
            description: '110 00 Prague 1, Czech Republic',
            color: 'from-purple-500 to-pink-500',
        },
    ];

    const supportTopics = [
        'General Inquiry',
        'Technical Support',
        'API Integration',
        'Data Questions',
        'Partnership',
        'Other',
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <span>📧</span>
                    <span>Contact Us</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                    Get in Touch
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Have questions about our exchange rate service? We're here to help! Reach out to
                    us and we'll respond as quickly as possible.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {contactMethods.map((method, index) => (
                    <div
                        key={index}
                        className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                    >
                        <div
                            className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                            <span className="text-white text-2xl">{method.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                        <p className="text-lg font-semibold text-gray-700 mb-2">{method.value}</p>
                        <p className="text-gray-600">{method.description}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Contact Form */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg">✉️</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                required
                            >
                                <option value="">Select a topic</option>
                                {supportTopics.map((topic, index) => (
                                    <option key={index} value={topic}>
                                        {topic}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50"
                                placeholder="Tell us how we can help you..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Send Message 🚀
                        </button>
                    </form>
                </div>

                {/* Additional Info */}
                <div className="space-y-8">
                    {/* Office Hours */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-lg">🕒</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Office Hours</h3>
                        </div>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM CET
                            </p>
                            <p>
                                <strong>Saturday:</strong> 10:00 AM - 2:00 PM CET
                            </p>
                            <p>
                                <strong>Sunday:</strong> Closed
                            </p>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            <span className="inline-flex items-center space-x-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span>
                                    We typically respond within 2-4 hours during business hours
                                </span>
                            </span>
                        </p>
                    </div>

                    {/* FAQ */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-lg">❓</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Quick Help</h3>
                        </div>
                        <div className="space-y-3">
                            <p className="text-sm">
                                <strong>Q: How often is data updated?</strong>
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                A: Exchange rates are updated daily by the Czech National Bank,
                                usually around 2:30 PM CET.
                            </p>

                            <p className="text-sm">
                                <strong>Q: Is there an API available?</strong>
                            </p>
                            <p className="text-sm text-gray-600">
                                A: Yes! We provide GraphQL API access. Contact us for integration
                                details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
