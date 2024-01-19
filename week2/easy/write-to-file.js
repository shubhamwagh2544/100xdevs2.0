//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

fs.appendFile('week2/easy/info.txt', '\nHello World', function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully");
});

let sum = 0;
for (let i = 0; i < 10000000; i++) {
    sum += i;
}

setTimeout(() => console.log("Hello Sir"), 3000);
console.log("After setTimeout");

console.log(sum);