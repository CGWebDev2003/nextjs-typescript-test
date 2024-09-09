import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    if (!id) {
      console.error('Missing ID in the request');
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const body = await req.json();
    const { completed } = body;

    if (typeof completed !== 'boolean') {
      console.error('Completed field is missing or not a boolean', body);
      return NextResponse.json({ error: 'Invalid or missing "completed" field' }, { status: 400 });
    }

    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: { completed: Boolean(!completed) },
    });

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({ error: 'Task not found or update failed' }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    if (!id) {
      console.error('Missing ID in the request');
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const deletedTask = await prisma.task.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedTask, { status: 200 });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Task not found or deletion failed' }, { status: 500 });
  }
}