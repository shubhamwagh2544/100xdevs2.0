/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


//1
function isPalindrome1(str) {
    let reversed = str.split('').reverse().join('');
    return str.toLowerCase() === reversed.toLowerCase();
}
console.log(isPalindrome1('Nan')); // should print true


//2
function isPalindrome2(str) {
    let reversed = '';
    for (let char of str.toLowerCase()) {
        reversed = char + reversed;
    }
    return str.toLowerCase() === reversed;
}

console.log(isPalindrome2('Nan')); // should print true


//3
function isPalindrome3(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome3('Nan')); // should print true