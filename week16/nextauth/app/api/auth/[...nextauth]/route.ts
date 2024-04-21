import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// export function GET(req: NextRequest, { params: { authRoutes } }: {
//     params: {
//         authRoutes: string[]
//     }
// }) {
//     console.log(authRoutes)
//     return NextResponse.json({
//         message: "Hello from the API!"
//     })
// }

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'username',
                    type: 'text',
                    placeholder: 'username'
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'password'
                }
            },
            async authorize(credentials, req) {
                // TODO: validation
                return {
                    id: '1',
                    name: "Shubham Wagh",
                    username: "shubhamwaghhere"
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string
})

export const GET = handler;
export const POST = handler;
//export { handler as GET, handler as POST };