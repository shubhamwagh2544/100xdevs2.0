import { NextRequest, NextResponse } from "next/server";

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
    console.log(body)

    return NextResponse.json({
        message: 'post successfull',
        username: body.username,
        password: body.password
    })
}