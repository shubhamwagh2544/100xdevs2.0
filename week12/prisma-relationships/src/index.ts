import { PrismaClient } from '@prisma/client'
import fs from 'fs';
import path from 'path';
const prisma = new PrismaClient()

const filePath = path.resolve(__dirname, 'globalemailId.txt');
let globalemailId: number = 1;

if (fs.existsSync(filePath)) {
    globalemailId = Number(fs.readFileSync(filePath, 'utf-8'));
}
globalemailId++;
process.on('exit', () => {
    fs.writeFileSync(filePath, globalemailId.toString());
});

type User = {
    name: string
    email: string
    password: string
}
type Todo = {
    title: string
    description: string
    done: boolean
}

async function adduserandtodo(user: User, todo: Todo) {
    const { name, email, password } = user
    const userresponse = await prisma.user.create({
        data: {
            name,
            email,
            password
        },
        select: {
            id: true
        }
    })
    console.log('user created: ', userresponse)

    const { title, description, done } = todo
    const todoresponse = await prisma.todo.create({
        data: {
            title,
            description,
            done,
            userId: userresponse.id

        },
        select: {
            id: true
        }
    })
    console.log('todo created: ', todoresponse)
}
adduserandtodo({
    name: 'shubham wagh',
    email: `shubhamwagh${globalemailId}@gmail.com`,
    password: 'shubhamwagh'
}, {
    title: 'Learn Prisma',
    description: 'Learn Prisma for database',
    done: false
})
    .then(async (err: any) => {
        if (err) console.log(err)
        await prisma.$disconnect()
    }).finally(async () => {
        await prisma.$disconnect()
    })
// delete all data: delete from "User"; delete from "Todo";
// alter sequence:  alter sequence  "User_id_seq" restart with 1; alter sequence  "Todo_id_seq" restart with 1;


async function adduserandtodowithtransaction(user: User, todo: Todo) {
    // add user and todo in a single transaction
    const { name, email, password } = user
    const { title, description, done } = todo
    let transactionresult: object;
    await prisma.$transaction(async (prisma) => {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        const todo = await prisma.todo.create({
            data: {
                title,
                description,
                done,
                userId: user.id
            }
        })
        transactionresult = {
            user,
            todo
        }
        console.log('user and todo created with transaction: ', transactionresult)
    })
}
adduserandtodowithtransaction({
    name: 'shubham wagh',
    email: `shubhamwagh${globalemailId}@gmail.com`,
    password: 'shubhamwagh'
}, {
    title: 'Learn Prisma',
    description: 'Learn Prisma for database',
    done: false
})
    .then(async (err: any) => {
        if (err) console.log(err)
        await prisma.$disconnect()
    }).finally(async () => {
        await prisma.$disconnect()
    })


async function getuser(email: string) {
    const userresponse = await prisma.user.findUnique({
        where: {
            email
        },
        select: {
            id: true,
            todos: true
        }
    })
    console.log('user found: ', userresponse)
}
getuser(`shubhamwagh${globalemailId}@gmail.com`)
    .then(async (err: any) => {
        if (err) console.log(err)
        await prisma.$disconnect()
    }).finally(async () => {
        await prisma.$disconnect()
    })


async function gettodoswithuserdetails(userid: number) {
    // many to one relationship (todo to user)
    const todowithuser = await prisma.todo.findMany({
        where: {
            userId: userid
        },
        select: {
            id: true,
            title: true,
            description: true,
            done: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    })
    console.log(`todos for user with id ${userid}: `, todowithuser)
}
gettodoswithuserdetails(1)
    .then(async (err: any) => {
        if (err) console.log(err)
        await prisma.$disconnect()
    }).finally(async () => {
        await prisma.$disconnect()
    })


async function gettodoswithuserdetailsbadapproach(userid: number) {
    // fetch details with two separate queries
    let finalresult: object;
    const userresponse = await prisma.user.findUnique({
        where: {
            id: userid
        }
    })
    //console.log('user found: ', userresponse)
    const todoresponse = await prisma.todo.findMany({
        where: {
            userId: userid
        }
    })
    //console.log('todos found: ', todoresponse)
    finalresult = {
        userresponse,
        todoresponse
    }
    console.log('user and todos:bad approach: ', finalresult)
}
gettodoswithuserdetailsbadapproach(1)
    .then(async (err: any) => {
        if (err) console.log(err)
        await prisma.$disconnect()
    }).finally(async () => {
        await prisma.$disconnect()
    })