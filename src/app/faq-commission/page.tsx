'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const commissionFAQs = [
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
];

export default function CommissionFAQPage() {
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
                            <h1 className="text-5xl md:text-6xl mb-6">Commission FAQs</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Everything you need to know about commissioning a custom portrait.
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
                                className="px-6 py-3 bg-[#50261A] text-white rounded-md hover:bg-[#3a1a0f] transition-all"
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

                {/* FAQs */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto space-y-4">
                            {commissionFAQs.map((faq, index) => (
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
                        <h2 className="text-4xl md:text-5xl mb-6">Ready to Commission?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Still have questions? Feel free to contact me, or check out my commission rates and process.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/commission" className="btn-primary">
                                View Rates
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
