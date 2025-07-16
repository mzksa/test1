'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Section1() {
  return (
    <section className="relative bg-white py-10 flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 flex space-x-4 space-x-reverse text-blue-600 font-semibold text-lg">
        <Link href="/login" className="hover:underline">دخول</Link>
        <span>|</span>
        <Link href="/register" className="hover:underline">تسجيل</Link>
      </div>
      <Image
        src="/banner.jpg"
        alt="صورة بانر"
        width={600}
        height={200}
        className="object-contain"
      />
    </section>
  );
}
