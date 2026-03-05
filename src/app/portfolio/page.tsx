import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Gallery - Aimy Sidney Franco',
    description: 'Browse my portfolio of custom portraits, pet renditions, bird paintings, and more. View examples of my artistic work across various mediums.',
};

const portfolioImages = [
    { src: '/images/SaphiraMain002.jpg', alt: 'Portrait Example 1', category: 'Pet Portraits' },
    { src: '/images/Norman.jpg', alt: 'Portrait Example 2', category: 'Pet Portraits' },
    { src: '/images/SaphiraMain002-copy.jpg', alt: 'Portrait Example 3', category: 'Pet Portraits' },
    { src: '/images/CharlieHP.webp', alt: 'Pet Portrait Example', category: 'Pet Portraits' },
    { src: '/images/Chavela02.webp', alt: 'Portrait Example 4', category: 'Pet Portraits' },
    { src: '/images/93208842_10158306497824074_WM-copy-768x1024.jpg', alt: 'Bird Painting Example', category: 'Pet Portraits' },
    { src: '/images/SFS_6927MAIN_001-1434x2048.jpg', alt: 'Portrait Example 5', category: 'Pet Portraits' },
    { src: '/images/arrtt00copy-1428x2048.jpg', alt: 'Portrait Example 6', category: 'Human Portraits' },
    { src: '/images/SFS_6899_00_Edited-714x10241-kjjjj-1-1428x2048.jpg', alt: 'Portrait Example 7', category: 'Human Portraits' },
];

export default function PortfolioPage() {
    return (
        <>
            <Header />

            <main className="site-content pt-28">
                {/* Hero Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl mb-6">Gallery</h1>
                            <div className="divider"></div>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6">
                                Explore my portfolio of custom portraits, pet renditions, and bird paintings. Each piece tells a unique story and captures the essence of its subject.
                            </p>
                        </div>

                        {/* Category Links */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Link
                                href="/human-portraits"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Human Portraits
                            </Link>
                            <Link
                                href="/pet-portraits"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Pet Portraits
                            </Link>
                            <Link
                                href="/birds"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Birds
                            </Link>
                            <Link
                                href="/miscellaneous"
                                className="px-6 py-3 bg-white text-[#50261A] rounded-md hover:bg-[#50261A] hover:text-white border border-[#50261A] transition-all"
                            >
                                Miscellaneous
                            </Link>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {portfolioImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="text-sm font-semibold uppercase">{image.category}</p>
                                            <p className="text-lg mt-1">{image.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-[#50261A] py-16 md:py-24">
                    <div className="container-custom text-center">
                        <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Commission Your Portrait?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">
                            Each piece in my gallery represents hours of dedicated work and passion. Let me create a timeless portrait for you or your loved ones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/commission" className="btn-inverted">
                                View Pricing & Process
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
