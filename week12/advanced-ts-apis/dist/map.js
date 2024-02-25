"use strict";
// Map Api in TypeScript
// Map is a collection of key-value pairs
Object.defineProperty(exports, "__esModule", { value: true });
const users = new Map();
users.set("_id1", {
    name: "shubham",
    email: "test@gmail.com",
    password: "test"
});
users.set("_id2", {
    name: "ramesh",
    email: "test@gmail.com",
    password: "test"
});
console.log(users.get("_id1"));
console.log(users.get("_id2"));
// 2nd way to create a map
let map2 = new Map([
    ["_id1", "shubham"],
    ["_id2", "ramesh"]
]);
// 3rd way to create a map
let map3 = new Map();
map3.set("_id1", "shubham");
map3.set("_id2", "ramesh");
