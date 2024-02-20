// 1
function addNumber(num: number) {
    return num + 10
    // return "hello" // works
}
console.log(addNumber(10)) // 20


// 2
function getUpperString(value: string) {
    return value.toUpperCase()
}
console.log(getUpperString("hello")) // HELLO


// 3
function signUpUser(email: string, password: string, isPaid: boolean) { }
signUpUser('temp@gmail.com', 'password', false)


// 4
function getArrayLength(arr: any[]) {
    return arr.length
}
getArrayLength([1, 2, 3])
getArrayLength(['shubham', 'ramesh', 'jayashri'])


// 5
function getFirstElement(arr: any[]) {
    return arr[0]
}
getFirstElement([1, 2, 3])
getFirstElement(['shubham', 'ramesh', 'jayashri'])


// 6
function logInUser(email: string, password: string, isPaid: boolean = false) { } // default value for isPaid
logInUser('temp@gmail.com', 'password') // isPaid = false 
logInUser('temp@gmail.com', 'password', true) // isPaid = true


// 7
const callme = (item: number | string, index: number) => { }
callme(10, 1)  // works
callme('shubham', 1)  // works