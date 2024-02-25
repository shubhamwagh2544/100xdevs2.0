// Pick API : Pick<Type, Keys> : Constructs a type by picking the set of properties Keys from Type.

interface User {
    id: number
    name: string
    age: number
    email: string
    password: string
}

interface UpdateProps {
    name: string
    age: number
    email: string
}

// pick name age email properties from User interface
type UserUpdate = Pick<User, 'name' | 'age' | 'email'>

function updateUserWithoutPick(user: UpdateProps) {
    console.log(
        user.name,
        user.age,
        user.email
    )
}
updateUserWithoutPick({ name: 'John', age: 30, email: 'test@gmail.com' })

function updateUserWithPick(user: UserUpdate) {
    console.log(
        user.name,
        user.age,
        user.email
    )
}
updateUserWithPick({ name: 'John', age: 30, email: 'test@gmail.com' })


export { }