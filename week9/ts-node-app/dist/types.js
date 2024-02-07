"use strict";
function call(user) {
    console.log(user.number);
}
call({ name: 'shubham', number: '0000000000' });
call({ name: 'shubham', number: 11111111111 });
function callA(input) {
    console.log(input);
}
callA('sss');
callA(123);
function callCC(user) {
    console.log(user.name);
    console.log(user.number);
}
callCC({
    name: 'shubham',
    number: 111
});
