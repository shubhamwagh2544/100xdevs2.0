import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'email',
                    type: 'text',
                    placeholder: 'email'
                },
                password: {
                    label: 'password',
                    type: 'password',
                    placeholder: 'password'
                }
            },
            async authorize(credentials, req) {
                // validation
                return {
                    id: '1',
                    name: "Shubham Wagh",
                    email: "shubhamwagh@gmail.com"
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
        jwt: ({ token, user }: any) => {
            console.log("token", token)
            token.userId = token.sub
            return token
        },
        session: ({ session, token, user }: any) => {
            console.log("session", session)
            if (session && session.user) {
                session.user.id = token.sub
            }
            return session;
        }
    }
}