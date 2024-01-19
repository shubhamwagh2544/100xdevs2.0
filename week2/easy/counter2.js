//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
//(Hint: setTimeout)

function counter() {
    let count = 0;
    function increaseCounter() {
        count++;
        console.clear();
        console.log(count);
        setTimeout(increaseCounter, 1000);
    }
    increaseCounter();
}

counter();