"use strict";
// function
function callme(msg) {
    console.log('called: ', msg);
}
callme('hello');
// variables
const a = 10;
let b = 20;
// arrays
const arr = [1, 2, 3];
const arr2 = [1, 2, 3];
// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayname(msg) {
        return `${msg} ${this.name}`;
    }
}
const person = new Person('John', 30);
console.log(person.sayname('Hello'));
