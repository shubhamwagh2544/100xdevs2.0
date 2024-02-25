// Partial API : Partial<Type> : Constructs a type with all properties of Type set to optional.

interface User {
    id: number
    name: string
    age: number
    email: string
    password: string
}

interface UpdateProps {
    name?: string
    age?: number
    email?: string
}

// pick api
type UserUpdate = Pick<User, 'name' | 'age' | 'email'>
// partial api
type UserUpdatePartial = Partial<UserUpdate>

function updateUserWithPartial(userOptional: UserUpdatePartial) {
    if ("name" in userOptional) {
        console.log('name:', userOptional.name)
    }
    if ("age" in userOptional) {
        console.log('age:', userOptional.age)
    }
    if ("email" in userOptional) {
        console.log('email:', userOptional.email)
    }
}

// partial api example
updateUserWithPartial({ name: 'John' })
updateUserWithPartial({ age: 30 })
updateUserWithPartial({ email: 'test@gmail.com' })

// pick api example
function updateUserWithPick(user: UserUpdate) { }
// Error: Property 'age' 'email' is missing in type '{ name: string; }' but required in type 'UserUpdate'.
// updateUserWithPick({ name: 'John' }) 
// Error: Property 'name' 'email' is missing in type '{ age: number; }' but required in type 'UserUpdate'.
// updateUserWithPick({ age: 30 })
// Error: Property 'name' 'age' is missing in type '{ age: number; }' but required in type 'UserUpdate'.
// updateUserWithPick({ email: 'test@gmail.com' })

export { }