"use strict";
class Personn {
    constructor(name, age, address, userId, userName) {
        this.defaultValue = 'default value';
        this.name = name;
        this.age = age;
        this.address = address;
        this.userId = userId;
        this.userName = userName;
    }
}
const person = new Personn('shubham wagh', 25, 'pune mh', 1, 'shubhamwagh');
console.log(person.defaultValue);
class Personn2 {
    constructor(userId, name, age, userName, address) {
        this.userId = userId;
        this.name = name;
        this.age = age;
        this.userName = userName;
        this.address = address;
    }
}
const person2 = new Personn2(1, 'shubham wagh', 25, 'shubhamwagh');
console.log(person2);
for (const key in person2) {
    console.log(key, person2[key]);
}
class Personn3 {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    deleteToken() {
        console.log('token deleted!');
    }
    constructor() {
        this._name = 'shubham';
        this.protectedProperty = 'protected property';
        this.deleteToken();
    }
    callMePublic() {
        this._name;
        this.deleteToken();
        console.log('I am public and can be called from outside the class');
    }
    static callMeStatic() {
        Personn3.classname;
        console.log('I am static and can be called without creating an object of the class');
    }
}
Personn3.classname = 'Personn3';
const person3 = new Personn3();
console.log(person3.name);
person3.name = 'shubham wagh';
console.log(person3.name);
person3.callMePublic();
Personn3.callMeStatic();
class Personn4 extends Personn3 {
    constructor() {
        super();
    }
    call() {
        this.callMePublic();
        Personn3.callMeStatic();
        this.protectedProperty = 'new protected property';
    }
}
const person4 = new Personn4();
person4.call();
