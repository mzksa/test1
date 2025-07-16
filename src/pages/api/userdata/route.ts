import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { id, name, age, idNumber, phone } = req.body;

  if (!id || !name || !age || !idNumber || !phone) {
    return res.status(400).json({ message: 'جميع الحقول مطلوبة' });
  }

  try {
    // تحديث مستخدم محدد حسب id
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, age: Number(age), idNumber, phone },
    });

    res.status(200).json({ message: 'تم حفظ البيانات', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'خطأ في الخادم' });
  }
}
