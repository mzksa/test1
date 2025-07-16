'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/userdata', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, age: Number(age), idNumber, phone }),
    });

    if (res.ok) {
      setMessage('تم حفظ البيانات بنجاح');
    } else {
      setMessage('حدث خطأ أثناء الحفظ');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4">إدخال بيانات المستخدم</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="number"
          placeholder="العمر"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="text"
          placeholder="رقم الهوية"
          value={idNumber}
          onChange={e => setIdNumber(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="text"
          placeholder="رقم الجوال"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          حفظ
        </button>
      </form>
    </div>
  );
}
