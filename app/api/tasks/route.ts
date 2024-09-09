import { Task } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const task = await prisma.task.create({
    data: {
      title: body.title
    },
  })

  return NextResponse.json(task);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const tasks = await prisma.task.findMany();

  console.log(tasks);

  return NextResponse.json(tasks);
}