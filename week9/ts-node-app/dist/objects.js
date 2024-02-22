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
