import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function deleteUser(email: string) {
    try {
        const res = await prisma.user.delete({
            where: {
                email
            }
        })
        console.log('deleted: ', res)
    }
    catch (err) {
        console.log('error: ', err)
    }
    finally {
        await prisma.$disconnect()
    }
}

deleteUser('shubhamwagh2@gmail.com')