import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Order Rates - Aimy Sidney Franco',
    description: 'Commission a custom portrait. View pricing, process, and information for human portraits, pet portraits, and more.',
};

export default function CommissionPage() {
    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Commission Rates & Process</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Transform your cherished memories into timeless works of art. Here&apos;s everything you need to know about commissioning a custom portrait.
                            </p>
                        </div>

                        {/* Pricing Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {/* Human Portraits */}
                            <div className="bg-white border-2 border-[#50261A] p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h3 className="text-3xl mb-4 text-center">Human Portraits</h3>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold text-center text-[#50261A] mb-2">Starting at $200</p>
                                    <p className="text-center text-sm text-gray-600">Prices vary by size and medium</p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Single subject: 8x10" - $200</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Single subject: 11x14" - $350</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Single subject: 16x20" - $550</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Additional subjects: +50% each</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Complex backgrounds: +$100</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="btn-primary w-full text-center block">
                                    Request Quote
                                </Link>
                            </div>

                            {/* Pet Portraits */}
                            <div className="bg-white border-2 border-[#50261A] p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h3 className="text-3xl mb-4 text-center">Pet Portraits</h3>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold text-center text-[#50261A] mb-2">Starting at $175</p>
                                    <p className="text-center text-sm text-gray-600">Prices vary by size and medium</p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Single pet: 8x10" - $175</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Single pet: 11x14" - $300</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Single pet: 16x20" - $475</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Additional pets: +40% each</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Complex backgrounds: +$75</span>
                                    </li>
                                </ul>
                                <Link href="/contact" className="btn-primary w-full text-center block">
                                    Request Quote
                                </Link>
                            </div>

                            {/* Bird Paintings */}
                            <div className="bg-white border-2 border-[#50261A] p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h3 className="text-3xl mb-4 text-center">Bird Paintings</h3>
                                <div className="mb-6">
                                    <p className="text-2xl font-bold text-center text-[#50261A] mb-2">Starting at $150</p>
                                    <p className="text-center text-sm text-gray-600">Original paintings and prints available</p>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Original: 8x10" - $150</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Original: 11x14" - $275</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Original: 16x20" - $425</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Prints available from $35</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Custom commissions welcome</span>
                                    </li>
                                </ul>
                                <Link href="/birds" className="btn-primary w-full text-center block">
                                    View Gallery
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commission Process */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">The Commission Process</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-[#50261A] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                                    1
                                </div>
                                <h3 className="text-xl mb-3">Inquiry</h3>
                                <p className="text-base">
                                    Contact me with details about your project, including size preferences, number of subjects, and any special requests.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-[#50261A] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                                    2
                                </div>
                                <h3 className="text-xl mb-3">Quote & Deposit</h3>
                                <p className="text-base">
                                    Receive a detailed quote and timeline. A 50% deposit is required to begin work on your commission.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-[#50261A] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                                    3
                                </div>
                                <h3 className="text-xl mb-3">Creation</h3>
                                <p className="text-base">
                                    I&apos;ll create your portrait with care and attention to detail. Receive progress updates throughout the process.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="w-16 h-16 bg-[#50261A] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">
                                    4
                                </div>
                                <h3 className="text-xl mb-3">Delivery</h3>
                                <p className="text-base">
                                    Upon final approval and payment, your artwork will be professionally packaged and shipped to you.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl mb-4">Important Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#50261A] mr-2 mt-1">•</span>
                                    <span>Turnaround time: Typically 4-6 weeks from deposit</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#50261A] mr-2 mt-1">•</span>
                                    <span>High-resolution reference photos required</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#50261A] mr-2 mt-1">•</span>
                                    <span>Minor revisions included in the price</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#50261A] mr-2 mt-1">•</span>
                                    <span>Shipping costs calculated separately</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#50261A] mr-2 mt-1">•</span>
                                    <span>Rush orders available for an additional fee</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            I&apos;d love to create a beautiful portrait for you. Contact me today to discuss your project and receive a personalized quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Contact Me
                            </Link>
                            <Link href="/faqs" className="btn-primary">
                                Read FAQs
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
