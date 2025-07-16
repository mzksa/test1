'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      // ✅ تخزين اسم المستخدم ثم التوجيه
      localStorage.setItem('username', username);
      router.push('/WelcomePage');
    } else {
      const data = await res.json();
      setError(data.message || 'فشل تسجيل الدخول');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">تسجيل الدخول</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-700">
          دخول
        </button>
      </form>
    </div>
  );
}
