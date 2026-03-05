'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Contact Me</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Have a question about commissions, art lessons, or just want to say hello? I&apos;d love to hear from you!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            {/* Contact Form */}
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h2 className="text-3xl mb-6">Send Me a Message</h2>
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center text-center py-12 px-6">
                                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#50261A' }}>Message Sent!</h3>
                                        <p className="text-gray-600 mb-2 text-base">Thank you for reaching out! I&apos;ll get back to you within 24–48 hours.</p>
                                        <p className="text-gray-400 text-sm mb-8">A confirmation has been noted. Looking forward to connecting with you! 🎨</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="btn-primary"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#50261A] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#50261A] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#50261A] focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#50261A] focus:border-transparent resize-none"
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn-primary w-full">
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="bg-[#ededed] p-8 rounded-lg">
                                    <h3 className="text-2xl mb-4">Get in Touch</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Email</h4>
                                            <a href="mailto:info@aimysidneyfranco.com" className="text-[#50261A] hover:underline">
                                                info@aimysidneyfranco.com
                                            </a>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Social Media</h4>
                                            <div className="flex gap-4">
                                                <a
                                                    href="https://facebook.com/abirkhalil.art"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#3f3e3e] hover:text-[#50261A]"
                                                >
                                                    Facebook
                                                </a>
                                                <a
                                                    href="https://instagram.com/abirkhalil.art"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#3f3e3e] hover:text-[#50261A]"
                                                >
                                                    Instagram
                                                </a>
                                                <a
                                                    href="https://pinterest.com/abirkhalil"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#3f3e3e] hover:text-[#50261A]"
                                                >
                                                    Pinterest
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#ededed] p-8 rounded-lg">
                                    <h3 className="text-2xl mb-4">Response Time</h3>
                                    <p className="text-base">
                                        I typically respond to inquiries within 24-48 hours during business days. For commission requests, please include as much detail as possible about your project to help me provide an accurate quote.
                                    </p>
                                </div>

                                <div className="bg-[#ededed] p-8 rounded-lg">
                                    <h3 className="text-2xl mb-4">Commission Inquiries</h3>
                                    <p className="text-base mb-4">
                                        For commission-related questions, please visit my{' '}
                                        <a href="/commission" className="text-[#50261A] hover:underline">
                                            Order Rates page
                                        </a>
                                        {' '}for detailed pricing and process information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
