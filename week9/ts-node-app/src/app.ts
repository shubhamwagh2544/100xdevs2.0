// function that takes another function as input and runs it after 1 sec

function callAnotheFn(fn: () => void): number {         // type of function
    setTimeout(fn, 1000)
    return 1
}

console.log(
    callAnotheFn(() => console.log('hey'))
)

// function that takes user as input and returns true or false bsaed on age
//way 1
function isLegal(user: {
    firstname: string,
    lastname: string,
    age: number
}): boolean {
    if (user.age > 18) return true
    else return false
}

console.log(isLegal({
    firstname: 'shubham',
    lastname: 'wagh',
    age: 25
}))

// way 2
interface User {
    firstname: string,
    lastname: string,
    age: number,
    email?: string          // optional argument
}

function isLegal2(user: User) {
    if (user.age > 18) return true
    else return false
}

console.log(isLegal2({
    firstname: 'shubham',
    lastname: 'wagh',
    age: 25
}))