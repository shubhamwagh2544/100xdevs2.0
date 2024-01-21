//create map functionality from scratch

function map(arr, callback) {
    const newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = callback(arr[i], i, arr);
    }
    return newarr;
}


let arr = [1, 2, 3, 4, 5];

let newarr = map(arr, function (element, index, array) {
    return element * 2;
});

console.log(newarr);