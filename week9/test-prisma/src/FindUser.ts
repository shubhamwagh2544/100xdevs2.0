import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


async function findUser(username: string) {
    // without try catch
    // with then-catch of promise
    const res = await prisma.user.findUnique({
        where: {
            email: username
        },
        select: {
            id: true,
            firstname: true,
            lastname: true
        }
    })
    return res
}

findUser('shubhamwagh2@gmail.com')
    .then(async (res) => {
        console.log('resolved : ', res)
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.log('rejected: ', err)
        await prisma.$disconnect()
    })