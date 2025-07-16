import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ message: 'بيانات الدخول غير صحيحة' }, { status: 401 });
  }

  // يمكنك لاحقًا استخدام JWT أو كوكيز هنا
  return NextResponse.json({ message: 'تم تسجيل الدخول' });
}
