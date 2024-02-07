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