import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
const prisma = new PrismaClient();

const filePath = path.resolve(__dirname, 'globalemailId.txt');
let globalemailId: number = 1;

const lockFile = promisify(fs.open)(`${filePath}.lock`, 'wx'); // Create lock file
let lockAcquired = false;

async function acquireLock() {
    try {
        await lockFile;
        lockAcquired = true;
    } catch (err) {
        console.error('Failed to acquire lock:', err);
    }
}

async function releaseLock() {
    if (lockAcquired) {
        await fs.promises.unlink(`${filePath}.lock`);
    }
}

async function readAndUpdateGlobalEmailId() {
    try {
        if (fs.existsSync(filePath)) {
            globalemailId = Number(fs.readFileSync(filePath, 'utf-8'));
        }
        globalemailId++;
        await fs.promises.writeFile(filePath, globalemailId.toString());
    } catch (err) {
        console.error('Error updating global email ID:', err);
    }
}

type User = {
    name: string;
    email: string;
    password: string;
};
type Todo = {
    title: string;
    description: string;
    done: boolean;
};

async function adduserandtodo(user: User, todo: Todo) {
    const { name, email, password } = user;
    const { title, description, done } = todo;

    try {
        const userresponse = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
            select: {
                id: true,
            },
        });
        console.log('User created:', userresponse);

        const todoresponse = await prisma.todo.create({
            data: {
                title,
                description,
                done,
                userId: userresponse.id,
            },
            select: {
                id: true,
            },
        });
        console.log('Todo created:', todoresponse);
    } catch (err) {
        console.error('Error creating user and todo:', err);
    }
}

async function getuser(email: string) {
    try {
        const userresponse = await prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                todos: true,
            },
        });
        console.log('User found:', userresponse);
    } catch (err) {
        console.error('Error fetching user:', err);
    }
}

async function main() {
    await acquireLock(); // Acquire lock before proceeding
    await readAndUpdateGlobalEmailId(); // Read and update global email ID
    await adduserandtodo(
        {
            name: 'shubham wagh',
            email: `shubhamwagh${globalemailId}@gmail.com`,
            password: 'shubhamwagh',
        },
        {
            title: 'Learn Prisma',
            description: 'Learn Prisma for database',
            done: false,
        }
    );
    await getuser('shubhamwagh1@gmail.com');
    await releaseLock(); // Release the lock
    await prisma.$disconnect();
}

main().catch((err) => {
    console.error('Error in main:', err);
    process.exit(1);
});