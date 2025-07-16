import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { name, age, idNumber, phone } = req.body;

  if (!name || !age || !idNumber || !phone) {
    return res.status(400).json({ message: 'جميع الحقول مطلوبة' });
  }

  try {
    // مثال: تحديث أول مستخدم (يمكن تعديل حسب الجلسة الحقيقية)
    await prisma.user.updateMany({
      where: {}, // شرط التحديث حسب المستخدم الحالي (هنا لكل المستخدمين كأبسط مثال)
      data: { name, age, idNumber, phone },
    });

    res.status(200).json({ message: 'تم حفظ البيانات' });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في الخادم' });
  }
}
