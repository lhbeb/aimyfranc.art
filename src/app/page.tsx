import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  return (
    <>
      <Header />

      <main className="site-content">
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* Welcome Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container-custom text-center">
            <h4 className="text-2xl md:text-3xl mb-6">WELCOME TO</h4>

            <Link href="/about" className="inline-block mb-6">
              <Image
                src="/images/logo.svg"
                alt="Aimy Sidney Franco"
                width={300}
                height={110}
                className="mx-auto"
              />
            </Link>

            <p className="text-lg md:text-xl font-semibold">
              PROFESSIONAL PORTRAIT ARTIST
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#ededed] py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-6">Services ProvideD By Me</h2>
              <p className="text-lg max-w-3xl mx-auto mb-8">
                Capturing the essence of loved ones, bringing avian beauty to life, and empowering through the art of creation
              </p>
              <div className="divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Custom Portraits */}
              <div className="service-card">
                <h4>CUSTOM PORTRAITS</h4>
                <div className="relative aspect-[545/768] mb-4">
                  <Image
                    src="/images/Chavela02.webp"
                    alt="Custom Portrait Example"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p>
                  I am passionate about creating meaningful art, and I pour genuine emotion into every human portrait and pet rendition. Whether you&apos;re treating yourself or surprising a loved one, allow me to turn your special moments into timeless pieces.
                </p>
                <Link href="/commission" className="service-arrow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </Link>
              </div>

              {/* Bird Paintings */}
              <div className="service-card">
                <h4>BIRD PAINTINGS</h4>
                <div className="relative aspect-[768/1024] mb-4">
                  <Image
                    src="/images/93208842_10158306497824074_WM-copy-768x1024.jpg"
                    alt="Bird Painting Example"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p>
                  I take pleasure in creating bird paintings as a way to unwind. If your bare walls are craving for feathered wonders, I encourage you to explore my bird gallery. You just might find the perfect avian companion awaiting a new home.
                </p>
                <Link href="/birds" className="service-arrow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </Link>
              </div>

              {/* Art Lessons */}
              <div className="service-card">
                <h4>ART LESSONS</h4>
                <div className="relative aspect-[768/1024] mb-4">
                  <Image
                    src="/aimy.png"
                    alt="Art Lesson Example"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <p>
                  Whether you&apos;re a complete beginner or seeking to refine your artistic skills, I provide a well-structured online and offline course that encompasses various mediums, including charcoal, soft pastels, watercolors, graphite, and more.
                </p>
                <Link href="/courses" className="service-arrow">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOOD / Buy Me a Coffee Section */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">

              {/* Badge */}
              <Image
                src="/this.png"
                alt="HOOD Badge"
                width={160}
                height={160}
                className="mx-auto mb-8 w-48 md:w-64 h-auto"
              />

              {/* Brand Label */}
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#50261A] mb-2">Artist Brand</p>

              {/* HOOD Title */}
              <h2
                className="text-7xl md:text-8xl font-black text-[#1a0a07] mb-6"
                style={{ letterSpacing: '-3px', lineHeight: 1 }}
              >
                HOOD
              </h2>

              {/* Divider */}
              <div className="w-14 h-[3px] bg-[#50261A] mx-auto mb-8" />

              {/* Message */}
              <p className="text-[#3f3e3e] text-lg md:text-xl leading-relaxed mb-3">
                All commissions, art lessons, and services by <strong>HOOD</strong> are processed through my{' '}
                <strong>Buy Me a Coffee</strong> page — quick, secure, and all in one place.
              </p>
              <p className="text-gray-400 text-sm mb-10">
                Browse my offerings, pick what inspires you, and place your order directly.
              </p>

              {/* CTA */}
              <a
                href="https://buymeacoffee.com/francoaimysidney"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FFDD00] hover:bg-[#f5d000] text-[#1a0a07] font-bold text-base px-10 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Image src="/bmcicon.png" alt="Buy Me a Coffee" width={22} height={22} className="h-[22px] w-auto" />
                Visit My Buy Me a Coffee Page
              </a>

              <p className="mt-5 text-xs text-gray-300 tracking-wide">
                buymeacoffee.com/francoaimysidney
              </p>

            </div>
          </div>
        </section>


        {/* About Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-6">About Me</h2>
                <div className="divider mb-6"></div>
                <p className="text-lg mb-4">
                  As a professional portrait artist, I specialize in capturing the essence and personality of my subjects through various artistic mediums. My passion lies in creating timeless pieces that celebrate the unique bond between people and their loved ones, including cherished pets.
                </p>
                <p className="text-lg mb-6">
                  With years of experience in both traditional and contemporary art techniques, I offer custom portrait commissions, bird paintings for nature enthusiasts, and comprehensive art lessons for aspiring artists of all levels.
                </p>
                <Link href="/about" className="inline-block bg-[#50261A] hover:bg-[#3a1a0f] text-white font-semibold px-8 py-3 rounded transition-colors duration-200">
                  Learn More About My Journey
                </Link>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/SaphiraMain002.jpg"
                  alt="About Aimy Sidney Franco"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#50261A] py-16 md:py-24">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">
              Whether you want to commission a custom portrait, explore my gallery, or learn the art of portraiture yourself, I&apos;m here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/commission" className="btn-inverted">
                Commission a Portrait
              </Link>
              <Link href="/portfolio" className="btn-inverted">
                View Gallery
              </Link>
              <Link href="/courses" className="btn-inverted">
                Start Learning
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
