"use client"

import axios from "axios";
import { useState } from "react";

export default function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            Username: <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} /> <br />
            Password: <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} /> <br />
            <button onClick={async () => {
                const response = await axios.post('http://localhost:3000/api/user', {
                    username,
                    password
                })
                console.log(response.data)
            }}>Sign Up</button>
        </div>
    )
}