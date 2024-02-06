"use strict";
function callAnotheFn(fn) {
    setTimeout(fn, 1000);
    return 1;
}
console.log(callAnotheFn(() => console.log('hey')));
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
console.log(isLegal({
    firstname: 'shubham',
    lastname: 'wagh',
    age: 25
}));
function isLegal2(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
console.log(isLegal2({
    firstname: 'shubham',
    lastname: 'wagh',
    age: 25
}));
