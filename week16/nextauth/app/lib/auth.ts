import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

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
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
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