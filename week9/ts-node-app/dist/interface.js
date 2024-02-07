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
