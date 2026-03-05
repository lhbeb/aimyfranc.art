'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqData = {
    commission: [
        {
            question: "How long does it take to complete a commission?",
            answer: "Typical turnaround time is 4-6 weeks from the date I receive your deposit. This includes time for sketching, painting, and any revisions. Rush orders are available for an additional fee and can be completed in 2-3 weeks depending on complexity."
        },
        {
            question: "What do I need to provide for a custom portrait?",
            answer: "I need high-resolution reference photos (at least 1MB, preferably 3-5MB) showing clear details and good lighting. For best results, provide multiple angles. For pets, photos showing their personality and typical expressions work best. I'm happy to guide you on selecting the right photos during our consultation."
        },
        {
            question: "Can you work from old or damaged photographs?",
            answer: "Yes! I specialize in restoring and bringing new life to old photographs. I can work with faded, torn, or low-quality images to create beautiful portraits. The clearer the original photo, the better the final result, but I've successfully worked with century-old photographs."
        },
        {
            question: "What if I'm not satisfied with the final portrait?",
            answer: "Your satisfaction is my priority. I include minor revisions in the commission price and will work with you to ensure you love the final piece. I provide progress photos throughout the process so you can give feedback before the portrait is complete."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, I ship worldwide! Shipping costs are calculated separately based on your location and the size of the artwork. All pieces are professionally packaged to ensure safe delivery. International orders typically arrive within 1-2 weeks."
        },
        {
            question: "What payment methods do you accept?",
            answer: "I accept payment via bank transfer, PayPal, and major credit cards. A 50% deposit is required to begin work, with the remaining balance due before shipping. Payment plans are available for larger commissions."
        },
        {
            question: "Can I commission a portrait as a gift?",
            answer: "Absolutely! Portrait commissions make wonderful gifts. I offer gift certificates and can coordinate with you to keep the commission a surprise. I also provide beautiful gift presentation options upon request."
        },
        {
            question: "What sizes do you offer?",
            answer: "I offer a range of standard sizes from 8x10 inches up to 24x30 inches. Custom sizes are also available - just let me know your requirements and I'll provide a quote. Larger pieces (30x40 and above) require special discussion."
        }
    ],
    artLessons: [
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
    ]
};

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>({
        commission: null,
        artLessons: null
    });

    const toggleFAQ = (category: string, index: number) => {
        setOpenIndex(prev => ({
            ...prev,
            [category]: prev[category] === index ? null : index
        }));
    };

    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Frequently Asked Questions</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Find answers to common questions about commissions and art lessons.
                            </p>
                        </div>

                        {/* Category Links */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Link
                                href="/faqs"
                                className="px-6 py-3 bg-[#50261A] text-white rounded-md hover:bg-[#3a1a0f] transition-all"
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
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Art Lessons
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Commission FAQs */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">Commission Questions</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqData.commission.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        onClick={() => toggleFAQ('commission', index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                                        <svg
                                            className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex.commission === index ? 'rotate-180' : ''
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {openIndex.commission === index && (
                                        <div className="px-6 pb-4">
                                            <p className="text-base leading-relaxed text-gray-700">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Art Lessons FAQs */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">Art Lessons Questions</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqData.artLessons.map((faq, index) => (
                                <div key={index} className="bg-[#ededed] rounded-lg shadow-md overflow-hidden">
                                    <button
                                        onClick={() => toggleFAQ('artLessons', index)}
                                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-200 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                                        <svg
                                            className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex.artLessons === index ? 'rotate-180' : ''
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {openIndex.artLessons === index && (
                                        <div className="px-6 pb-4">
                                            <p className="text-base leading-relaxed text-gray-700">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Still Have Questions */}
                <section className="bg-[#50261A] py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6">Still Have Questions?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Can't find the answer you're looking for? I'm here to help! Feel free to reach out and I'll get back to you as soon as possible.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Contact Me
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
