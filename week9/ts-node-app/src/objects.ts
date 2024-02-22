const user = {
    name: 'John',
    age: 30,
    email: 'johnemail@tnc.com'
}

// issue
function signUpUser1({ name, age, email }: { name: string, age: number, email: string }): {} {
    console.log(name, age, email)
    return {}
}
console.log(
    signUpUser1(user)
)


function signUpUserr({ name, age, email }: { name: string, age: number, email: string }): void {
    console.log(name, age, email)
}
signUpUserr(user)


function signUpUser2({ name, age, email }:
    { name: string, age: number, email: string }): { name: string, age: number, email: string } {
    console.log(name, age, email)
    return { name, age, email }
}
console.log(
    signUpUser2(user)
)

/*
why not: very long type definition
repetition + not reusable + not readable + not maintainable + not scalable + not flexible 
+ not extensible + not composable + not testable + not debuggable + not refactorable 
=> use interface or type alias
*/

// solution
type Userr = {
    name: string,
    age: number,
    email: string
}
function signUpUser3(user: Userr): Userr {
    console.log(user.name, user.age, user.email)
    return user
}
console.log(
    signUpUser3(user)
)


// readonly and optional
type Userrr = {
    readonly _id: number,
    name: string,
    age: number,
    address?: string
}
const userr = {
    _id: 1,
    name: 'shubham wagh',
    age: 25
}
function signUpUser4(userr: Userrr): Userrr {
    //userr._id = 123       // error: Cannot assign to '_id' because it is a read-only property.
    return {
        ...userr,
        address: 'pune'
    }
}
console.log(
    signUpUser4(userr)
)


// combining types
type CreditCardNumber = {
    cardnumber: string
}
type CreditCardHolder = {
    cardholder: string
}
type CreditCard = CreditCardNumber & CreditCardHolder & {
    readonly cvv: number
}
const creditCard: CreditCard = {
    cardnumber: '1234567890123456',
    cardholder: 'shubham wagh',
    cvv: 123
}