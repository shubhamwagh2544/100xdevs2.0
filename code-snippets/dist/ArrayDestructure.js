"use strict";
function change() {
    let arr = [1, 2, 3, 4, 5];
    let newArr = [...arr, 6, 7, 8, 9, 10];
    return newArr;
}
console.log(change());
