'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // إذا لم يكن هناك اسم مستخدم، يتم التوجيه إلى صفحة الدخول
      router.push('/');
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem('username'); // حذف البيانات
    router.push('/'); // التوجيه إلى الصفحة الرئيسية
  }

return (
  <div className="flex justify-center items-center gap-4 mt-5">
    <h1 className="text-2xl">مرحبًا {username} 🎉</h1>
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
    >
      خروج
    </button>
  </div>
);

}
