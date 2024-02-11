import { useState } from "react"

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

    let name: string
    let value: string

    function onChangeHandle(e: any): void {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    name="firstname"
                    placeholder="your firstname"
                    value={user.firstname}
                    onChange={onChangeHandle}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="your lastname"
                    value={user.lastname}
                    onChange={onChangeHandle}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="your email"
                    value={user.email}
                    onChange={onChangeHandle}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="your password"
                    value={user.password}
                    onChange={onChangeHandle}
                />
                <input
                    type="submit"
                />
            </form>
        </>
    )
}