import { PrismaClient } from '@prisma/client'       // prima autogenerates client
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
    // try-catch syntax
    try {
        const res = await prisma.user.create({
            data: {
                email: username,
                password,
                firstname,
                lastname
            },
            select: {           // returns this part
                id: true,
                email: true
            }
        })
        console.log(res)
    }
    catch (err) {
        console.log('user not inserted! : ', err)
    }
    finally {
        // prisma disconnect
        await prisma.$disconnect()
    }

}

insertUser(
    'shubhamwagh2@gmail.com',
    'shubhamwagh2',
    'shubham2',
    'wagh2'
)