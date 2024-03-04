import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import randomBalance from '@/util/random'
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {

    const body = await req.json()

    // check if user exists
    const user = await prisma.user.findUnique({
        where: {
            username: body.username
        }
    })

    if (user) {
        return NextResponse.json({
            message: 'user already exists'
        }, {
            status: 400
        })
    }

    // creating user
    const response = await prisma.user.create({
        data: {
            username: body.username,
            firstname: body.firstname,
            lastname: body.lastname,
            password: body.password,
            Account: {
                create: {
                    balance: randomBalance(10000, 1),
                }
            }
        }, 
    })

    return NextResponse.json({
        message: 'user created!',
        data: {
            id: response.id,
            username: response.username,
            firstname: response.firstname,
            lastname: response.lastname
        }
    }, {
        status: 201
    })
}