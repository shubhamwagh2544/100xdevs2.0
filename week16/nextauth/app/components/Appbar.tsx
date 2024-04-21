"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function () {
    //const router = useRouter()
    const session = useSession()
    return (
        <div>
            <div className="flex justify-between mx-5 my-5">
                <button
                    onClick={() => {
                        //router.push('/api/auth/signin')
                        signIn("google")
                    }}
                >
                    Sign In With Google
                </button>
                <button
                    onClick={() => {
                        //router.push('/api/auth/signin')
                        signIn("github")
                    }}
                >
                    Sign In With Github
                </button>
                <button
                    onClick={() => {
                        //router.push('/api/auth/signin')
                        signIn("credentials")
                    }}
                >
                    Sign In With Email
                </button>
                <button
                    onClick={() => {
                        //router.push('/')
                        signOut()
                    }}
                >
                    Sign Out
                </button>
            </div>
            <div>
                {JSON.stringify(session)}
            </div>
        </div>
    )
}