import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function findUser(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}