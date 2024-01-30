function counter1() {
    const counter = document.getElementById('counter').innerHTML;
    const arr = counter.split(" ");
    const newCounter = parseInt(arr[1]) + 1;

    document.getElementById('counter').innerHTML = "Counter " + newCounter
}

function counter2() {
    const counter = document.getElementById('counter').innerHTML;
    const newCounter = parseInt(counter.split(" ")[1]) + 1;

    document.getElementById('counter').innerHTML = "Counter " + newCounter
}