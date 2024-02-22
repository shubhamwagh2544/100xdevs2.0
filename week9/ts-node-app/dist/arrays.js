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
const numberArr = [1, 2, 3, 4, 5];
const stringArr = ['hello', 'world'];
const mixedArr = [1, 'hello', 2, 'world'];
const twoDArray = [
    [1, 2, 3],
    [4, 5, 6]
];
const threeDArray = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];
const users = [
    {
        name: 'shubham',
        age: 25,
        email: 'test@gmail.com'
    },
    {
        name: 'wagh',
        age: 25
    },
    {
        name: 'shubham wagh',
        age: 25
    }
];
const userss = [
    {
        name: 'shubham',
        age: 25,
        email: 'test2@gmail.com'
    },
    {
        name: 'wagh',
        age: 25
    },
    {
        name: 'shubham wagh',
        age: 25
    }
];
