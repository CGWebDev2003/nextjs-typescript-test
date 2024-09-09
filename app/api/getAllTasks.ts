import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTasks() {
    const tasks = await prisma.task.findMany();

    return tasks;
}