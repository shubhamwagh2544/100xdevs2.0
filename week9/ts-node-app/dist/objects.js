"use strict";
const user = {
    name: 'John',
    age: 30,
    email: 'johnemail@tnc.com'
};
function signUpUser1({ name, age, email }) {
    console.log(name, age, email);
    return {};
}
console.log(signUpUser1(user));
function signUpUserr({ name, age, email }) {
    console.log(name, age, email);
}
signUpUserr(user);
function signUpUser2({ name, age, email }) {
    console.log(name, age, email);
    return { name, age, email };
}
console.log(signUpUser2(user));
function signUpUser3(user) {
    console.log(user.name, user.age, user.email);
    return user;
}
console.log(signUpUser3(user));
const userr = {
    _id: 1,
    name: 'shubham wagh',
    age: 25
};
function signUpUser4(userr) {
    return Object.assign(Object.assign({}, userr), { address: 'pune' });
}
console.log(signUpUser4(userr));
const creditCard = {
    cardnumber: '1234567890123456',
    cardholder: 'shubham wagh',
    cvv: 123
};
