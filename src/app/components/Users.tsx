'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  age: number;
  idNumber: string;
  phone: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) throw new Error('فشل تحميل البيانات');
        const data = await res.json();
        setUsers(data);
      } catch {
        setError('حدث خطأ أثناء تحميل المستخدمين');
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">قائمة المستخدمين</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">الاسم</th>
            <th className="border p-2">العمر</th>
            <th className="border p-2">رقم الهوية</th>
            <th className="border p-2">رقم الجوال</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.age}</td>
              <td className="border p-2">{user.idNumber}</td>
              <td className="border p-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
