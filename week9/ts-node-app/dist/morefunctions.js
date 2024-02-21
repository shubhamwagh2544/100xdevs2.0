"use strict";
function addNumbers(num) {
    return num + 10;
}
console.log(addNumbers(10));
function getUpperStrings(val) {
    return val.toUpperCase();
}
console.log(getUpperStrings("hello"));
function signUpUsers(email, password, isPaid) { }
signUpUsers('test@gmail.com', 'password', false);
function getArrayLengths(arr) {
    return arr.length;
}
console.log(getArrayLengths([1, 2, 3]));
function getFirstElements(arr) {
    return arr[0];
}
console.log(getFirstElements([1, 2, 3]));
console.log(getFirstElements(['shubham', 'ramesh', 'jayashri']));
function logInUsers(email, password, isPaid = false) { }
logInUsers('test@gmail.com', 'password');
logInUsers('test@gmail.com', 'password', true);
function getNumberOrString(val) {
    if (val > 10)
        return val;
    else
        return "200 OK";
}
console.log(getNumberOrString(20));
console.log(getNumberOrString(2));
function fail(errorMessage) {
    throw new Error(errorMessage);
}
function getUnknownType(val) {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
    else {
        console.log('value is not a string');
    }
}
let val = 'hello';
getUnknownType(val);
val = 10;
getUnknownType(val);
