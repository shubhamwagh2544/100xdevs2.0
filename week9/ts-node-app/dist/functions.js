"use strict";
function addNumber(num) {
    return num + 10;
}
console.log(addNumber(10));
function getUpperString(value) {
    return value.toUpperCase();
}
console.log(getUpperString("hello"));
function signUpUser(email, password, isPaid) { }
signUpUser('temp@gmail.com', 'password', false);
function getArrayLength(arr) {
    return arr.length;
}
getArrayLength([1, 2, 3]);
getArrayLength(['shubham', 'ramesh', 'jayashri']);
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 3]);
getFirstElement(['shubham', 'ramesh', 'jayashri']);
function logInUser(email, password, isPaid = false) { }
logInUser('temp@gmail.com', 'password');
logInUser('temp@gmail.com', 'password', true);
const callme = (item, index) => { };
callme(10, 1);
callme('shubham', 1);
