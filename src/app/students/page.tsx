import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Student Testimonials - Aimy Sidney Franco',
    description: 'Read testimonials from art students who have taken courses and learned portrait painting techniques.',
};

const studentTestimonials = [
    {
        name: "Emma Rodriguez",
        category: "Intermediate Course",
        rating: 5,
        text: "Taking Aimy's intermediate portrait course transformed my art skills completely. Her teaching style is clear, encouraging, and incredibly detailed. I went from struggling with basic proportions to creating portraits I'm proud to share. Best investment I've made in my artistic journey!",
        date: "November 2025"
    },
    {
        name: "Lisa Park",
        category: "Beginner Course",
        rating: 5,
        text: "As a complete beginner, I was nervous about starting art lessons. Aimy made the learning process so enjoyable and approachable. Her step-by-step guidance and positive feedback gave me the confidence to continue creating. I'm now working on my third portrait!",
        date: "September 2025"
    },
    {
        name: "Marcus Johnson",
        category: "Advanced Course",
        rating: 5,
        text: "The advanced course pushed me to develop my own artistic voice while refining my technical skills. Aimy's personalized feedback on my portfolio pieces was invaluable. I've since started selling my work and taking commissions thanks to what I learned.",
        date: "August 2025"
    },
    {
        name: "Sophie Williams",
        category: "Beginner Course",
        rating: 5,
        text: "I always thought I couldn't draw, but Aimy proved me wrong! Her beginner course breaks everything down so clearly. The video lessons are excellent, and being able to submit my work for feedback made all the difference. I'm hooked on portrait art now!",
        date: "July 2025"
    },
    {
        name: "Daniel Kim",
        category: "Intermediate Course",
        rating: 5,
        text: "After completing the beginner course, I jumped right into intermediate, and it was exactly what I needed. Learning watercolor techniques and working with color has opened up so many creative possibilities. Aimy's teaching makes complex concepts easy to understand.",
        date: "June 2025"
    },
    {
        name: "Rachel Adams",
        category: "In-Person Workshop",
        rating: 5,
        text: "The in-person workshop was an incredible experience! Getting hands-on guidance from Aimy in her studio, seeing her work up close, and meeting other students was inspiring. I learned more in that weekend than I could have imagined. Highly recommend!",
        date: "May 2025"
    }
];

export default function StudentsPage() {
    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Student Success Stories</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Discover what students say about their learning experience and artistic growth.
                            </p>
                        </div>

                        {/* Category Links */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Link
                                href="/testimonials"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
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
                                className="px-6 py-3 bg-[#50261A] text-white rounded-md hover:bg-[#3a1a0f] transition-all"
                            >
                                Art Students
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {studentTestimonials.map((testimonial, index) => (
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

                {/* Call to Action */}
                <section className="bg-[#50261A] py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6 text-white">Start Your Artistic Journey Today</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">
                            Join these successful students and unlock your creative potential with comprehensive art courses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/courses" className="btn-inverted">
                                View Courses
                            </Link>
                            <Link href="/contact" className="btn-inverted">
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
