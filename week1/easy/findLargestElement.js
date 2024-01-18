/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


//1
function findLargestElement1(numbers) {
    let largest = numbers[0];
    numbers.forEach(number => {
        if (number > largest) {
            largest = number;
        }
    });
    return largest;
}

console.log(findLargestElement1([3, 7, 2, 9, 1]));


//2
function findLargestElement2(numbers) {
    return numbers.reduce((acc, curr) => {
        if (curr > acc) {
            acc = curr;
        }
        return acc;
    }, numbers[0]);
}

console.log(findLargestElement2([3, 7, 2, 9, 1]));
