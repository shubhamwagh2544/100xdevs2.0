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
// partial api example
updateUserWithPartial({ name: 'John' });
updateUserWithPartial({ age: 30 });
updateUserWithPartial({ email: 'test@gmail.com' });
// pick api example
function updateUserWithPick(user) { }
// Error: Property 'age' 'email' is missing in type '{ name: string; }' but required in type 'UserUpdate'.
// updateUserWithPick({ name: 'John' }) 
// Error: Property 'name' 'email' is missing in type '{ age: number; }' but required in type 'UserUpdate'.
// updateUserWithPick({ age: 30 })
// Error: Property 'name' 'age' is missing in type '{ age: number; }' but required in type 'UserUpdate'.
// updateUserWithPick({ email: 'test@gmail.com' })
