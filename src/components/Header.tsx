'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const headerClass = transparent
    ? 'fixed top-0 left-0 right-0 z-50 transparent-header'
    : 'sticky top-0 z-50 bg-white border-b';

  return (
    <header className={headerClass} id="masthead">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="block">
                <Image
                  src="/images/logo.svg"
                  alt="Aimy Sidney Franco"
                  width={858}
                  height={294}
                  className="site-logo"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="main-navigation" aria-label="Site Navigation">
              <ul className="flex items-center space-x-1">
                <li><Link href="/" className="menu-link">HOME</Link></li>
                <li><Link href="/about" className="menu-link">ABOUT</Link></li>
                <li><Link href="/portfolio" className="menu-link">GALLERY</Link></li>
                <li><Link href="/courses" className="menu-link">COURSES</Link></li>
                <li className="relative group">
                  <Link href="/testimonials" className="menu-link">TESTIMONIALS</Link>
                  <ul className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg border-t-2 border-[#50261A] hidden group-hover:block">
                    <li><Link href="/customers" className="block px-6 py-3 hover:bg-gray-50">Customers</Link></li>
                    <li><Link href="/students" className="block px-6 py-3 hover:bg-gray-50">Students</Link></li>
                  </ul>
                </li>
                <li className="relative group">
                  <Link href="/faqs" className="menu-link">FAQ&apos;S</Link>
                  <ul className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg border-t-2 border-[#50261A] hidden group-hover:block">
                    <li><Link href="/faq-commission" className="block px-6 py-3 hover:bg-gray-50">Commissions</Link></li>
                    <li><Link href="/art-lessons" className="block px-6 py-3 hover:bg-gray-50">Art Lessons</Link></li>
                  </ul>
                </li>
                <li><Link href="/commission" className="menu-link">ORDER RATES</Link></li>
                <li><Link href="/contact" className="menu-link">CONTACT</Link></li>
                <li>
                  <a
                    href="https://buymeacoffee.com/francoaimysidney"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buy Me a Coffee"
                    className="flex items-center px-2 py-1"
                  >
                    <Image src="/bmcicon.png" alt="Buy Me a Coffee" width={36} height={36} className="h-9 w-auto" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-28 px-5 bg-white">
          {/* Mobile Logo */}
          <Link href="/" className="block">
            <Image
              src="/images/logo.svg"
              alt="Aimy Sidney Franco"
              width={858}
              height={294}
              className="site-logo"
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="bg-white border-t">
            <ul className="py-2">
              <li><Link href="/" className="block px-5 py-3 hover:bg-gray-50">HOME</Link></li>
              <li><Link href="/about" className="block px-5 py-3 hover:bg-gray-50">ABOUT</Link></li>

              <li><Link href="/portfolio" className="block px-5 py-3 hover:bg-gray-50">GALLERY</Link></li>

              <li><Link href="/courses" className="block px-5 py-3 hover:bg-gray-50">COURSES</Link></li>

              <li>
                <button
                  onClick={() => toggleSubmenu('testimonials')}
                  className="w-full text-left px-5 py-3 hover:bg-gray-50 flex justify-between items-center"
                >
                  TESTIMONIALS
                  <span className={`transform transition-transform ${openSubmenu === 'testimonials' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openSubmenu === 'testimonials' && (
                  <ul className="bg-gray-50">
                    <li><Link href="/customers" className="block px-10 py-2 hover:bg-gray-100">Customers</Link></li>
                    <li><Link href="/students" className="block px-10 py-2 hover:bg-gray-100">Students</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={() => toggleSubmenu('faqs')}
                  className="w-full text-left px-5 py-3 hover:bg-gray-50 flex justify-between items-center"
                >
                  FAQ&apos;S
                  <span className={`transform transition-transform ${openSubmenu === 'faqs' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openSubmenu === 'faqs' && (
                  <ul className="bg-gray-50">
                    <li><Link href="/faq-commission" className="block px-10 py-2 hover:bg-gray-100">Commissions</Link></li>
                    <li><Link href="/art-lessons" className="block px-10 py-2 hover:bg-gray-100">Art Lessons</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="/commission" className="block px-5 py-3 hover:bg-gray-50">ORDER RATES</Link></li>
              <li><Link href="/contact" className="block px-5 py-3 hover:bg-gray-50">CONTACT</Link></li>
              <li>
                <a
                  href="https://buymeacoffee.com/francoaimysidney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50"
                >
                  <Image src="/bmcicon.png" alt="Buy Me a Coffee" width={28} height={28} className="h-7 w-auto" />
                  <span className="text-sm font-medium">Buy Me a Coffee</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
