import axios from "axios";
import { useState } from "react";

export default function SignUp() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function submitHandler(event: any) {
        event.preventDefault();
        console.log('clicked')
        const response = await axios.post("http://localhost:3000/signup", {
            username,
            password
        }, {
            withCredentials: true       // This is important for cookies to be saved in the browser
        });
        console.log(response.data);
        alert("User signed up");
        window.location.href = "http://localhost:5173/user";
    }

    return (
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" style={{ marginBottom: "10px" }} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" style={{ marginBottom: "10px" }} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "blue", color: "white", borderRadius: "5px" }}
                onClick={submitHandler}
            >Sign Up</button>
        </form>
    )
}