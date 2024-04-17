"use server"

import prisma from '@/db'

export async function signup(email: string, password: string) {
    try {
        await prisma.user.create({
            data: {
                email,
                password,
            }
        })
        return {
            message: "User created successfully",
            data: { email, password }
        }
    }
    catch (e: any) {
        return {
            message: "Error creating user",
            error: e.message
        }
    }
}