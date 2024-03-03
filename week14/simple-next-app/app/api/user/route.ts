import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// export function GET() {
//     // db logic
//     return Response.json({
//         message: 'data fetched successfully',
//         name: 'shubham wagh',
//         email: 'shubhamwagh@gmail.com'
//     })
// }

// export function POST() {
//     return Response.json({
//         message: 'data posted successfully',
//         name: 'shubham wagh',
//         email: 'shubhamwagh@gmail.com'
//     })
// }


export async function POST(req: NextRequest) {
    const body = await req.json()

    const { username, password } = body
    console.log(body)

    // save user to db
    const response = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    return NextResponse.json({
        message: 'user created successfully',
        response
    }, {
        status: 200,                            // 200
        statusText: 'success/created'           // OK
    })
}