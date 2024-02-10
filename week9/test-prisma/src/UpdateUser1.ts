import { PrismaClient } from "@prisma/client";
import { copyFileSync } from "fs";
const prisma = new PrismaClient()

interface UpdateParams {
    firstname: string,
    lastname: string
}

async function updateUser(username: string, { firstname, lastname }: UpdateParams) {
    return await prisma.user.update({
        where: {                    // condition: find user
            email: username
        },
        data: {                     // payload: data to change
            firstname,
            lastname
        },
        select: {                   // return: what to return
            id: true,
            firstname: true,
            lastname: true
        }
    })
}

updateUser('shubhamwagh2@gmail.com', { firstname: 'john', lastname: 'wick' })
    .then(async (res) => {
        console.log('user updated: ', res)
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.log('error while updating: ', err)
        await prisma.$disconnect()
    })
