"use strict";
function maxNumber(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNumber([1, 4, 2, 5, 3]));
function ok() {
    return ['hello', 'world'];
}
const arr = [1, 2, 3, 4, 5];
const newarr = arr.map((item, index) => {
    return item + 2;
});
newarr.forEach((item) => console.log(item));
