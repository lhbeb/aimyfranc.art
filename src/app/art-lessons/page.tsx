'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const artLessonsFAQs = [
    {
        question: "Do I need any prior art experience to take your courses?",
        answer: "Not at all! My beginner course (L1) is designed for complete beginners with no prior experience. I teach all the fundamentals including materials, techniques, and basic drawing skills. If you have some experience, the intermediate (L2) or advanced (L3) courses might be better suited for you."
    },
    {
        question: "What materials do I need for the online courses?",
        answer: "I provide a detailed materials list at the start of each course. For the beginner course, you'll need basic supplies like graphite pencils, erasers, paper, and charcoal (approximately $50-75 total). I recommend specific brands and where to purchase them. Intermediate and advanced courses may require additional mediums like watercolors or pastels."
    },
    {
        question: "How are the online courses delivered?",
        answer: "Online courses include pre-recorded video lessons that you can watch at your own pace, downloadable resources and reference materials, and the ability to submit your work for personalized feedback. You'll have lifetime access to all course materials and any updates I make."
    },
    {
        question: "Can I get one-on-one instruction?",
        answer: "Yes! I offer private lessons both online and in-person (if local). One-on-one sessions are customized to your skill level and goals, with flexible scheduling. Contact me to discuss availability and rates."
    },
    {
        question: "How long does it take to complete a course?",
        answer: "Course length varies by level. The beginner course typically takes 8-10 weeks if you work 2-3 hours per week. However, since you have lifetime access, you can work at your own pace - some students complete it in a month, others take several months while balancing other commitments."
    },
    {
        question: "Do you offer refunds?",
        answer: "I offer a 14-day money-back guarantee for online courses. If you're not satisfied within the first two weeks, I'll provide a full refund, no questions asked. After 14 days, refunds are not available, but you'll have lifetime access to continue learning."
    },
    {
        question: "Are in-person workshops available?",
        answer: "Yes! I hold in-person workshops periodically throughout the year. These are small group sessions (maximum 6 students) held in my studio. Workshop dates are announced via my email list and social media. They fill up quickly, so sign up for notifications!"
    },
    {
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, all students who complete the course requirements and submit their final project receive a certificate of completion. This is a great way to document your artistic journey and can be added to your portfolio or resume."
    }
];

export default function ArtLessonsFAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Art Lessons FAQs</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Everything you need to know about taking art courses and developing your skills.
                            </p>
                        </div>

                        {/* Category Links */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Link
                                href="/faqs"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                All FAQs
                            </Link>
                            <Link
                                href="/faq-commission"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Commissions
                            </Link>
                            <Link
                                href="/art-lessons"
                                className="px-6 py-3 bg-[#50261A] text-white rounded-md hover:bg-[#3a1a0f] transition-all"
                            >
                                Art Lessons
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto space-y-4">
                            {artLessonsFAQs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                                        <svg
                                            className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-4">
                                            <p className="text-base leading-relaxed text-gray-700">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-[#50261A] py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Learning?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Still have questions? Feel free to contact me, or check out my available courses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/courses" className="btn-primary">
                                View Courses
                            </Link>
                            <Link href="/contact" className="btn-primary">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
