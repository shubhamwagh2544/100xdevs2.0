"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: 'shubham',
    id: 1,
    age: 20
};
//user.name = 'ramesh'  // Error: Cannot assign to 'name' because it is a read-only property.
user.age = 25; // No Error
const userReadonly = {
    name: 'shubham',
    id: 1,
    age: 20
};
const config = {
    host: 'localhost',
    port: 3000,
    username: 'admin',
    password: 'admin'
};
