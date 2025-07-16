'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-400 text-white shadow font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-center relative">

        {/* زر القائمة للجوال - يظهر على اليمين */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl absolute left-6 top-1/2 -translate-y-1/2 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* قائمة الروابط */}
        <ul
          className={`flex flex-col md:flex-row gap-4 items-center font-medium text-base
          md:static absolute top-full md:top-auto right-0 md:right-auto
          bg-blue-700 md:bg-transparent w-full md:w-auto
          md:justify-center
          transition-all duration-300
          ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden md:max-h-full md:overflow-visible'}
          `}
          style={{ zIndex: 100 }}
        >
          {[
            { href: '/', label: 'الرئيسية' },
            { href: '/about', label: 'من نحن' },
            { href: '/contact', label: 'اتصل بنا' },
            { href: '/location', label: 'موقعنا' },
          ].map(({ href, label }) => (
            <li key={href} className="py-2 md:py-0">
              <Link
                href={href}
                className="block px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-colors duration-300 text-center"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
