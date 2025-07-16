'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.message || 'حدث خطأ');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">تسجيل حساب</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 mb-4 w-full"
          required
        />
        <button type="submit" className="bg-green-600 text-white py-2 w-full rounded hover:bg-green-700">
          تسجيل
        </button>
      </form>
    </div>
  );
}
