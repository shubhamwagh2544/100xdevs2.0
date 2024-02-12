import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createTodo(todo: string) {
    return await prisma.todo.create({
        data: {
            title: todo
        }
    })
}