import { useState } from "react"
import axios from "axios"

interface UserData {
    firstname: string
    lastname: string
    email: string
    password: string
}

export function FormComponent() {

    const [user, setUser] = useState<UserData>({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    function onChangeHandle(e: any): void {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const postData = async (e: any) => {
        e.preventDefault()

        //send data to backend
        const res = await axios.post('http://localhost:3000/register', user)

        if (res.data.result === 'success') {
            window.alert('success')
        }
        else if (res.data.result === 'failure') [
            window.alert('failure')
        ]
        else {
            window.alert('error')
        }
    }

    return (
        <>
            <form method="post">
                <input
                    type="text"
                    name="firstname"
                    placeholder="your firstname"
                    autoComplete="off"
                    required
                    value={user.firstname}
                    onChange={onChangeHandle}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="your lastname"
                    autoComplete="off"
                    required
                    value={user.lastname}
                    onChange={onChangeHandle}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="your email"
                    autoComplete="off"
                    required
                    value={user.email}
                    onChange={onChangeHandle}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="your password"
                    autoComplete="off"
                    required
                    value={user.password}
                    onChange={onChangeHandle}
                />
                <input
                    type="submit"
                    onClick={postData}
                />
            </form>
        </>
    )
}