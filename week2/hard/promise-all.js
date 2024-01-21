/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const { copyFileSync } = require("fs");

function wait1(t) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(t * 1000);
        }, t * 1000);
    })
}

function wait2(t) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(t * 1000);
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(t * 1000);
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
}

let promise = calculateTime(1, 2, 3);

promise.then(function (data) {
    let sum = 0;
    for (let number of data) {
        sum += number;
    }
    console.log(`Total time: ${sum} milliseconds`);
})