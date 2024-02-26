// function
function callme(msg: string): void {
    console.log('called: ', msg);
}

callme('hello');

// variables
const a = 10;
let b = 20;

// arrays
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// class
class Person {
    constructor(public name: string, public age: number) {
    }
    sayname(msg: string): string {
        return `${msg} ${this.name}`;
    }
}
const person = new Person('John', 30);
console.log(person.sayname('Hello'));