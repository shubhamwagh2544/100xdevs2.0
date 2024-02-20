// 1
function addNumbers(num: number): number {
    return num + 10
    // return "hello" // error: Type 'string' is not assignable to type 'number'
}
console.log(addNumbers(10)) // 20


// 2
function getUpperStrings(val: string): string {
    return val.toUpperCase()
}
console.log(getUpperStrings("hello")) // HELLO


// 3
function signUpUsers(email: string, password: string, isPaid: boolean): void { }
signUpUsers('test@gmail.com', 'password', false)


// 4
function getArrayLengths(arr: any[]): number {
    return arr.length
}
console.log(getArrayLengths([1, 2, 3]))


// 5
function getFirstElements(arr: any[]): any {
    return arr[0]
}
console.log(getFirstElements([1, 2, 3]))
console.log(getFirstElements(['shubham', 'ramesh', 'jayashri']))


// 6
function logInUsers(email: string, password: string, isPaid: boolean = false): void { } // default value for isPaid
logInUsers('test@gmail.com', 'password') // isPaid = false
logInUsers('test@gmail.com', 'password', true) // isPaid = true


// 7
function getNumberOrString(val: number): number | string {
    if (val > 10) return val
    else return "200 OK"
}
console.log(getNumberOrString(20)) // 20
console.log(getNumberOrString(2)) // 200 OK