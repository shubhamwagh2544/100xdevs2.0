import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function saveUser(firstname: string, lastname: string, email: string, password: string) {
    return await prisma.user.create({
        data: {
            firstname,
            lastname,
            email,
            password
        }
    })
}