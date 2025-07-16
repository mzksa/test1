import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'الرجاء ملء جميع الحقول' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return NextResponse.json({ message: 'اسم المستخدم مستخدم بالفعل' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { username, password: hashedPassword },
    });

    return NextResponse.json({ message: 'تم التسجيل بنجاح' }, { status: 201 });
  } catch (error) {
    console.error('Error in register API:', error);
    return NextResponse.json({ message: 'خطأ في الخادم الداخلي' }, { status: 500 });
  }
}
