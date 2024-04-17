import prisma from '@/db'
import { AxiosError } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        console.log(body)

        await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
            }
        })

        return NextResponse.json({
            message: "User created successfully",
            data: body
        }, { status: 201 })
    }
    catch (e: any) {
        return NextResponse.json({
            message: "Error creating user",
            error: e.message
        }, { status: 500 })
    }
}