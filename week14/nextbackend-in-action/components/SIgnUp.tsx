"use client"

import axios from "axios"
import { useState } from "react"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold mb-5">Sign Up</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" type="email" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit"
                    onClick={async () => {
                        const resposne = await axios.post("http://localhost:3000/api/user", {
                            email,
                            password
                        })
                        console.log(resposne.data)
                    }}
                >Sign Up</button>
            </form>
        </div>
    )
}