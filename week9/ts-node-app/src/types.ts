// 1
type Customer = {
    name: string,
    number: string | number
}

function call(user: Customer) {
    console.log(user.number)
}

call({ name: 'shubham', number: '0000000000' })
call({ name: 'shubham', number: 11111111111 })


// 2
type StringOrNumber = string | number

function callA(input: StringOrNumber) {
    console.log(input)
}

callA('sss')
callA(123)


// 3
type AA = {
    name: string
}

type BB = {
    number: number
}

type CC = AA & BB

function callCC(user: CC) {
    console.log(user.name)
    console.log(user.number)
}

callCC({
    name: 'shubham',
    number: 111
})