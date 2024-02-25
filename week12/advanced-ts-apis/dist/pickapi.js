"use strict";
// Pick API : Pick<Type, Keys> : Constructs a type by picking the set of properties Keys from Type.
Object.defineProperty(exports, "__esModule", { value: true });
function updateUserWithoutPick(user) {
    console.log(user.name, user.age, user.email);
}
updateUserWithoutPick({ name: 'John', age: 30, email: 'test@gmail.com' });
function updateUserWithPick(user) {
    console.log(user.name, user.age, user.email);
}
updateUserWithPick({ name: 'John', age: 30, email: 'test@gmail.com' });
