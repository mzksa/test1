'use client';

import { useState } from 'react';

export default function AddUserPage() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    nationalId: '',
    phone: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/userdata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('✅ تم حفظ البيانات بنجاح');
      setForm({ name: '', age: '', nationalId: '', phone: '', password: '' });
    } else {
      setMessage(`❌ ${data.message || 'حدث خطأ ما'}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-10 rounded shadow" dir="rtl">
      <h2 className="text-2xl font-bold mb-4 text-center">إضافة مستخدم</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="العمر"
          value={form.age}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="nationalId"
          placeholder="رقم الهوية"
          value={form.nationalId}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="رقم الجوال"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          إرسال
        </button>
      </form>

      {message && (
        <p className="text-center mt-4 font-semibold text-green-700">{message}</p>
      )}
    </div>
  );
}
