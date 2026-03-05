import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'About - Aimy Sidney Franco',
    description: 'Learn about Aimy Sidney Franco, a professional portrait artist specializing in custom portraits, pet renditions, and bird paintings.',
};

export default function AboutPage() {
    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">About Me</h1>
                            <div className="divider"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative aspect-square">
                                <Image
                                    src="/images/SaphiraMain002.jpg"
                                    alt="Aimy Sidney Franco Portrait Artist"
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl mb-6">My Journey as an Artist</h2>
                                <p className="text-lg mb-4">
                                    Welcome to my artistic world! I&apos;m Aimy Sidney Franco, a passionate portrait artist dedicated to creating meaningful art that captures the essence and personality of my subjects.
                                </p>
                                <p className="text-lg mb-4">
                                    My journey in art began with a deep appreciation for the human form and the unique stories each individual carries. Over the years, I&apos;ve honed my skills across various mediums including charcoal, soft pastels, watercolors, and graphite.
                                </p>
                                <p className="text-lg mb-4">
                                    What sets my work apart is the genuine emotion I pour into every piece. Whether I&apos;m creating a human portrait, pet rendition, or bird painting, my goal is always to create timeless art that resonates with the viewer and celebrates the subject&apos;s unique character.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Specialties */}
                <section className="bg-[#ededed] py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl mb-6">My Specialties</h2>
                            <div className="divider"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl mb-4 text-center">Custom Portraits</h3>
                                <p className="text-base leading-relaxed">
                                    I create bespoke portraits that capture the essence of individuals and their loved ones. Each commission is treated with the utmost care and attention to detail, ensuring a piece that will be treasured for generations.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl mb-4 text-center">Pet Portraits</h3>
                                <p className="text-base leading-relaxed">
                                    Our pets hold a special place in our hearts. I specialize in capturing their unique personalities and the joy they bring to our lives through detailed and emotive pet portraits.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl mb-4 text-center">Bird Paintings</h3>
                                <p className="text-base leading-relaxed">
                                    Bird paintings are my passion project and a way to unwind. I find beauty in the delicate features and vibrant colors of our avian friends, bringing them to life on canvas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Approach */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl mb-6">My Artistic Approach</h2>
                                <p className="text-lg mb-4">
                                    Every artwork begins with understanding the subject, whether it&apos;s a person, pet, or bird. I believe that the key to creating meaningful art lies in capturing not just the physical likeness, but the spirit and personality of the subject.
                                </p>
                                <p className="text-lg mb-4">
                                    I work closely with my clients throughout the commission process, ensuring that the final piece exceeds expectations and becomes a cherished heirloom.
                                </p>
                                <p className="text-lg mb-6">
                                    Beyond creating art, I&apos;m passionate about teaching others. My art lessons are designed to help students of all levels develop their skills and discover the joy of artistic expression.
                                </p>
                            </div>
                            <div className="relative aspect-[3/4]">
                                <Image
                                    src="/images/CharlieHP.webp"
                                    alt="Art Process"
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-[#50261A] py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6 text-white">Let&apos;s Create Together</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">
                            Ready to commission a custom portrait or start your artistic journey? I&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/commission" className="btn-inverted">
                                Commission a Portrait
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
