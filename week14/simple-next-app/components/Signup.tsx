"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    return (
        <div>
            Username: <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} /> <br />
            Password: <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} /> <br />
            <button onClick={async () => {
                const user = await axios.post('http://localhost:3000/api/user', {
                    username,
                    password
                })
                console.log(user.data)
                if (user.data.response.id) {
                    // navigate to dashboard
                    router.push('/dashboard')
                }
            }}>Sign Up</button>
        </div>
    )
}