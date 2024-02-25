interface User {
    readonly name: string
    id: number
    age: number
}

const user: User = {
    name: 'shubham',
    id: 1,
    age: 20
}
//user.name = 'ramesh'  // Error: Cannot assign to 'name' because it is a read-only property.
user.age = 25           // No Error


// what if we want to make all properties of User interface readonly?
// Readonly API : Readonly<Type> : Constructs a type with all properties of Type set to readonly.
interface Userr {
    name: string
    id: number
    age: number
}
const userReadonly: Readonly<Userr> = {
    name: 'shubham',
    id: 1,
    age: 20
}
// userReadonly.age = 23        // Error: Cannot assign to 'age' because it is a read-only property.
// userReadonly.name = 'ramesh' // Error: Cannot assign to 'name' because it is a read-only property.
// userReadonly.id = 2          // Error: Cannot assign to 'id' because it is a read-only property.

// use case of Readonly: Configuration object
interface Configuration {
    host: string
    port: number
    username: string
    password: string
}
const config: Readonly<Configuration> = {
    host: 'localhost',
    port: 3000,
    username: 'admin',
    password: 'admin'
}
export { }