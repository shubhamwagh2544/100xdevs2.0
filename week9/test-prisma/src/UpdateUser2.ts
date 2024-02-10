import { PrismaClient } from "@prisma/client";
import { copyFileSync } from "fs";
const prisma = new PrismaClient()


async function updateUser(username: string, firstname: string, lastname: string) {
    return await prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstname,
            lastname
        },
        select: {
            id: true,
            firstname: true,
            lastname: true
        }
    })
}

updateUser('shubhamwagh2@gmail.com', 'john', 'wick')
    .then(async (res) => {
        console.log('user updated: ', res)
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.log('error while updating: ', err)
        await prisma.$disconnect()
    })
