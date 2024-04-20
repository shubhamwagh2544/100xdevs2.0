import axios from "axios"
import { useEffect, useState } from "react"

export default function User() {
    const [user, setUser] = useState({
        username: ""
    })

    useEffect(() => {
        axios.get("http://localhost:3000/me", {
            withCredentials: true
        })
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    async function logoutHandler() {
        await axios.post("http://localhost:3000/logout", {}, {
            withCredentials: true
        })
        alert("Logged Out")
        window.location.href = "http://localhost:5173/signup"
    }

    return (
        <div>
            <h1>Your username is {user.username}</h1>
            <button onClick={logoutHandler}>LogOut</button>
        </div>
    )
}