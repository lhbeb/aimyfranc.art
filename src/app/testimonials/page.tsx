import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Testimonials - Aimy Sidney Franco',
    description: 'Read what my clients and students say about their experience with custom portraits and art lessons.',
};

const testimonials = [
    {
        name: "Sarah Mitchell",
        type: "customer",
        category: "Pet Portrait",
        rating: 5,
        text: "Aimy created the most beautiful portrait of my golden retriever, Max. She captured his personality perfectly, from the sparkle in his eyes to his gentle demeanor. The attention to detail is incredible, and I couldn't be happier with the final piece. It's now the centerpiece of my living room!",
        date: "January 2026"
    },
    {
        name: "Michael Chen",
        type: "customer",
        category: "Family Portrait",
        rating: 5,
        text: "We commissioned a family portrait for our parents' 50th anniversary. Aimy was professional, patient, and incredibly talented. She worked with us through every step and made sure we were thrilled with the result. Our parents cried when they saw it - it's truly a treasure we'll keep forever.",
        date: "December 2025"
    },
    {
        name: "Emma Rodriguez",
        type: "student",
        category: "Intermediate Course",
        rating: 5,
        text: "Taking Aimy's intermediate portrait course transformed my art skills completely. Her teaching style is clear, encouraging, and incredibly detailed. I went from struggling with basic proportions to creating portraits I'm proud to share. Best investment I've made in my artistic journey!",
        date: "November 2025"
    },
    {
        name: "David Thompson",
        type: "customer",
        category: "Custom Portrait",
        rating: 5,
        text: "Aimy painted a memorial portrait of my late grandmother from an old photograph. Her ability to restore the image and bring it to life in watercolor was nothing short of magical. The painting captures her essence so beautifully that I feel like she's still with us.",
        date: "October 2025"
    },
    {
        name: "Lisa Park",
        type: "student",
        category: "Beginner Course",
        rating: 5,
        text: "As a complete beginner, I was nervous about starting art lessons. Aimy made the learning process so enjoyable and approachable. Her step-by-step guidance and positive feedback gave me the confidence to continue creating. I'm now working on my third portrait!",
        date: "September 2025"
    },
    {
        name: "James Wilson",
        type: "customer",
        category: "Bird Painting",
        rating: 5,
        text: "I purchased one of Aimy's bird paintings for my office, and it's absolutely stunning. The level of detail and the vibrant colors bring so much life to the space. Everyone who visits comments on it. I'm already planning to commission a custom piece!",
        date: "August 2025"
    }
];

export default function TestimonialsPage() {
    const customerTestimonials = testimonials.filter(t => t.type === 'customer');
    const studentTestimonials = testimonials.filter(t => t.type === 'student');

    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Client Testimonials</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Discover what my clients and students say about their experience with custom portraits and art lessons.
                            </p>
                        </div>

                        {/* Category Links */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Link
                                href="/testimonials"
                                className="px-6 py-3 bg-[#50261A] text-white rounded-md hover:bg-[#3a1a0f] transition-all"
                            >
                                All Testimonials
                            </Link>
                            <Link
                                href="/customers"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Commission Clients
                            </Link>
                            <Link
                                href="/students"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Art Students
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">Commission Clients</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {customerTestimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.category}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-[#50261A]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-base leading-relaxed mb-4">{testimonial.text}</p>
                                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Student Testimonials */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">Art Students</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {studentTestimonials.map((testimonial, index) => (
                                <div key={index} className="bg-[#ededed] p-8 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.category}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-[#50261A]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-base leading-relaxed mb-4">{testimonial.text}</p>
                                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-[#50261A] py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Join the many satisfied clients and students who have experienced the joy of beautiful art. Let's create something amazing together!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/commission" className="btn-primary">
                                Commission a Portrait
                            </Link>
                            <Link href="/courses" className="btn-primary">
                                Enroll in Courses
                            </Link>
                            <Link href="/contact" className="btn-primary">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
