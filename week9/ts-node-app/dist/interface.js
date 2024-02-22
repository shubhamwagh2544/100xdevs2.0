"use strict";
class Employee {
    constructor(name, email, password, age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
    }
    greet(message) {
        console.log(`hello, good morning ${message}`);
    }
}
const Shubham = new Employee('shubham wagh', 'shubhamwagh@gmail.com', 'shubhamwagh', 25);
console.log(Shubham.name);
console.log(Shubham.email);
console.log(Shubham.age);
Shubham.greet('shubham wagh');
function calA(user) {
    console.log(user.name);
}
calA({ name: 'shubham' });
calA({ name: 25 });
function say(input) {
    console.log(input.name);
    console.log(input.number);
}
say({
    name: 'shubham',
    number: 123
});
const usser = {
    _id: 1,
    name: 'shubham',
    age: 25,
    email: 'test@gmail.com',
    startTrial(msg) {
        return `start trial ${msg}`;
    },
    endTrial(index, someElse) {
        return { index, someElse };
    },
};
let start = usser.startTrial('hello');
let end = usser.endTrial(1, true);
console.log(start, " :::::::::\n ", end);
