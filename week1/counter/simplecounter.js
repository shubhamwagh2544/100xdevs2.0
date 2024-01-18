// javascript counter to count numbers from 30 to 0

const button = document.getElementById("btn");
const number = document.getElementById("number");
let counter = 30;

button.addEventListener("click", function () {
    number.innerHTML = --counter;
    if (counter == 0) {
        counter = 31;
    }
});