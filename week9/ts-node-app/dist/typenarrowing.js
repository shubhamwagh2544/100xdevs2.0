"use strict";
function getId(id) {
    if (id) {
        if (typeof id === 'number') {
            return id + 1;
        }
        else if (typeof id === 'string') {
            return id.toLowerCase();
        }
    }
    else {
        return 'id is null';
    }
}
console.log(getId(1));
console.log(getId('Hello'));
console.log(getId(null));
function checkString(strs) {
    if (typeof strs === 'string') {
        return strs.toUpperCase();
    }
    else if (strs instanceof Array) {
        return strs.map(str => str.toUpperCase());
    }
    else {
        return 'strs is null';
    }
}
checkString('Hello');
checkString(['Hello', 'World']);
checkString(null);
let arrs = [];
console.log(typeof arrs);
console.log(arrs instanceof Array);
console.log(arrs.length);
let obj = {
    name: 'John',
    id: 1
};
for (let key in obj) {
    console.log(obj[key]);
}
console.log(typeof obj);
console.log(obj instanceof Object);
function printAll(user) {
    if ('isAdmin' in user) {
    }
    else {
    }
}
function checkDate(date) {
    if (date instanceof Date) {
        return date.toDateString();
    }
    else {
        return new Date(date).toDateString();
    }
}
function isCar(vehicle) {
    return vehicle.speed !== undefined;
}
function getSpeed(vehicle) {
    if (isCar(vehicle)) {
        return 'Car';
    }
    else {
        return 'Bike';
    }
}
console.log(getSpeed({ brand: 'BMW', speed: 200 }));
