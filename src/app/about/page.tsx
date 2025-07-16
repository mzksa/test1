// src/app/page.tsx
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import About from '../components/About';
import Section4 from '../components/Section4';

export const metadata = {
  title: 'منصة إدارة المستخدمين',
  description: 'أهلاً بك في منصة إدارة المستخدمين الخاصة بنا',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* المحتوى الرئيسي */}
      <main className="flex-grow">
        <Section1 />
        <Section2 />
        <About />
      </main>

      {/* التذييل */}
      <Section4 />
    </div>
  );
}
