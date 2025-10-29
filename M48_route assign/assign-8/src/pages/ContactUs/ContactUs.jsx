import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
    // State to trigger animations on mount
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // When the component mounts, set isMounted to true after a short delay
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 100); // 100ms delay to ensure transition is applied
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className={`py-16 transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Have questions or need support? We'd love to hear from you.
                        Reach out to us directly or fill out the form.
                    </p>
                </div>

                {/* Main Content Box */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:flex">

                    {/* Column 1: Contact Information */}
                    <div
                        className={`lg:w-1/2 p-8 sm:p-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white transition-transform duration-700 ease-out ${isMounted ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
                        <p className="text-blue-100 mb-8">
                            Our team is available 24/7. Fill out the form, and we'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Phone size={24} className="text-blue-200" />
                                <span className="text-lg">(123) 456-7890</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={24} className="text-blue-200" />
                                <span className="text-lg">support@docconnect.com</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin size={24} className="text-blue-200 mt-1" />
                                <span className="text-lg">
                                    123 Wellness Avenue, <br />
                                    Health City, ST 12345
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Contact Form */}
                    <div
                        className={`lg:w-1/2 p-8 sm:p-12 transition-transform duration-700 ease-out ${isMounted ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Appointment Inquiry"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
