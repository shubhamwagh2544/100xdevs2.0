"use strict";
function firstElm(arr) {
    return arr[0];
}
console.log(firstElm(['hi', 'helloe']));
console.log(firstElm([1, 2, 3, 4, 5]));
function firstEl(arr) {
    return arr[0];
}
function firstElmn(arr) {
    return arr[0];
}
console.log(firstElmn(['hi', 'helloe']));
console.log(firstElmn([1.11111, 2.2222]));
function generics(args) {
    return args;
}
console.log(generics('hi'));
console.log(generics(25));
function firstElement(arr) {
    return arr[0];
}
let firstelement = firstElement(['shubham', 'helo']);
console.log(firstelement.toUpperCase());
let firstnumber = firstElement([1.111111, 2.22222]);
console.log(firstnumber.toFixed(2));
const firstElementArrow = (arr) => {
    return arr[0];
};
console.log(firstElementArrow(['shubham', 'helo']));
console.log(firstElementArrow([1.111111, 2.22222]));
const getDatabaseAccess = (valOne, valTwo) => {
    return {
        valOne,
        valTwo
    };
};
console.log(getDatabaseAccess('shubham', { connection: 'localhost', username: 'shubham', password: 'shubham', extra: 'extra' }));
class Cart {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
    get getCart() {
        return this.cart;
    }
}
const cart = new Cart();
cart.addToCart('shubham');
cart.addToCart('wagh');
console.log(cart.getCart);
const cart2 = new Cart();
cart2.addToCart(1111);
cart2.addToCart(2222);
console.log(cart2.getCart);
