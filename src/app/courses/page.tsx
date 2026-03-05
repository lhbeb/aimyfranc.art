import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Art Courses - Aimy Sidney Franco',
    description: 'Learn portrait art from a professional. Online and offline courses available for all skill levels - beginner, intermediate, and advanced.',
};

export default function CoursesPage() {
    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Art Lessons</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Develop your artistic skills with structured courses designed for all levels. Learn various mediums including charcoal, soft pastels, watercolors, and graphite.
                            </p>
                        </div>

                        {/* Course Levels */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {/* Beginner */}
                            <div className="bg-white border-2 border-[#50261A] p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h3 className="text-3xl mb-4 text-center">L1 Beginner</h3>
                                <div className="mb-6">
                                    <Image
                                        src="/aimy.png"
                                        alt="Art Lesson Example"
                                        width={768}
                                        height={1024}
                                        className="w-full h-auto rounded-lg mb-4"
                                    />
                                </div>
                                <h4 className="text-xl mb-3 font-semibold">What You&apos;ll Learn:</h4>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Basic drawing fundamentals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Understanding proportions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Shading techniques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Introduction to various mediums</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Simple portrait exercises</span>
                                    </li>
                                </ul>
                                <Link href="https://buymeacoffee.com/francoaimysidney" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
                                    Learn More
                                </Link>
                            </div>

                            {/* Intermediate */}
                            <div className="bg-white border-2 border-[#50261A] p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h3 className="text-3xl mb-4 text-center">L2 Intermediate</h3>
                                <div className="mb-6">
                                    <Image
                                        src="/images/Chavela02.webp"
                                        alt="Intermediate Art Lesson"
                                        width={545}
                                        height={768}
                                        className="w-full h-auto rounded-lg mb-4"
                                    />
                                </div>
                                <h4 className="text-xl mb-3 font-semibold">What You&apos;ll Learn:</h4>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Advanced shading & blending</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Facial features in detail</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Working with color</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Texture and detail work</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Pet portrait techniques</span>
                                    </li>
                                </ul>
                                <Link href="https://buymeacoffee.com/francoaimysidney" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
                                    Learn More
                                </Link>
                            </div>

                            {/* Advanced */}
                            <div className="bg-white border-2 border-[#50261A] p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h3 className="text-3xl mb-4 text-center">L3 Advanced</h3>
                                <div className="mb-6">
                                    <Image
                                        src="/images/CharlieHP.webp"
                                        alt="Advanced Art Lesson"
                                        width={400}
                                        height={500}
                                        className="w-full h-auto rounded-lg mb-4"
                                    />
                                </div>
                                <h4 className="text-xl mb-3 font-semibold">What You&apos;ll Learn:</h4>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Professional portfolio development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Complex compositions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Mastering multiple mediums</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Personal style development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">✓</span>
                                        <span>Commission work preparation</span>
                                    </li>
                                </ul>
                                <Link href="https://buymeacoffee.com/francoaimysidney" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Format */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">Course Formats</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl mb-4">Online Lessons</h3>
                                <p className="text-base mb-4">
                                    Learn at your own pace with comprehensive video tutorials, step-by-step demonstrations, and personalized feedback on your work.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Lifetime access to course materials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Submit work for review</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Community forum access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Certificate upon completion</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl mb-4">In-Person Workshops</h3>
                                <p className="text-base mb-4">
                                    Join small group sessions or one-on-one lessons for hands-on instruction and immediate feedback in a creative studio environment.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Direct guidance and demonstration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Materials provided</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Small class sizes (max 6 students)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#50261A] mr-2">•</span>
                                        <span>Networking opportunities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6">Start Your Artistic Journey</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Whether you&apos;re picking up a pencil for the first time or looking to refine your skills, I&apos;m here to guide you every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Enroll Now
                            </Link>
                            <Link href="/testimonials" className="btn-primary">
                                Student Testimonials
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
