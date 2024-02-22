interface Person {
    name: string;
    email: string;
    password: string;
    age: number;

    greet(message: string): void        // function
}

class Employee implements Person {
    name: string;
    email: string;
    password: string;
    age: number;

    constructor(name: string, email: string, password: string, age: number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
    }

    greet(message: string): void {
        console.log(`hello, good morning ${message}`)
    }
}

const Shubham = new Employee('shubham wagh', 'shubhamwagh@gmail.com', 'shubhamwagh', 25)

//name, email, age
console.log(Shubham.name)
console.log(Shubham.email)
console.log(Shubham.age)

Shubham.greet('shubham wagh')

// 2
interface A {
    name: string | number
}

function calA(user: A) {
    console.log(user.name)
}


calA({ name: 'shubham' })
calA({ name: 25 })

// 3
interface X {
    name: string | number
}

interface Z extends X {
    number: number
}

function say(input: Z) {
    console.log(input.name)
    console.log(input.number)
}

say({
    name: 'shubham',
    number: 123
})

// 3
interface Uuser {
    readonly name: string,
    age: number,
    email?: string

    startTrial: (input: string) => string,
    endTrial: (id: number, live: boolean) => object
}

// can redeclare to add more properties => reopening of interface for extension
interface Uuser {
    readonly _id: number
}

const usser: Uuser = {
    _id: 1,
    name: 'shubham',
    age: 25,
    email: 'test@gmail.com',

    startTrial(msg: string): string {
        return `start trial ${msg}`
    },

    endTrial(index: number, someElse: boolean): object {
        return { index, someElse }
    },
}

let start = usser.startTrial('hello')
let end = usser.endTrial(1, true)
console.log(start, " :::::::::\n ", end);


// extension
interface Uusser extends Uuser {
    address?: string,
    phone?: number
}