"use client"

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup() {

    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
                    <form className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="username"
                                name="username"
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">Firstname</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstname"
                                type="text"
                                placeholder="firstname"
                                name="firstname"
                                autoComplete="off"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">Lastname</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastname"
                                type="text"
                                placeholder="lastname"
                                name="lastname"
                                autoComplete="off"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="password"
                                name="password"
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={async (e) => {
                                    e.preventDefault()
                                    const user = await axios.post("http://localhost:3000/api/signup", {
                                        username,
                                        firstname,
                                        lastname,
                                        password
                                    })
                                    console.log(user.data)
                                    if (user.data.message.includes("created")) {
                                        router.push("/dashboard")
                                    }
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
