"use strict";
// Partial API : Partial<Type> : Constructs a type with all properties of Type set to optional.
function updateUserWithPartial(userOptional) {
    if ("name" in userOptional) {
        console.log('name:', userOptional.name);
    }
    if ("age" in userOptional) {
        console.log('age:', userOptional.age);
    }
    if ("email" in userOptional) {
        console.log('email:', userOptional.email);
    }
}
updateUserWithPartial({ name: 'John' });
updateUserWithPartial({ age: 30 });
updateUserWithPartial({ email: 'test@gmail.com' });
