/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

//1
function countVowels1(str) {
    let chars = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str.split('').forEach(char => {
        if (chars.includes(char.toLowerCase())) {
            count++;
        }
    })
    return count;
}

console.log(countVowels1('Hello Shubham')); // should print 2


//2
function countVowels2(str) {
    let count = 0;
    let vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels2('Hello Shubham')); // should print 2