/*function calculateSum() {
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const finalSum = document.getElementById('finalSum');

    //fetch
    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b) //fetch brings promise
        .then(function (res) {
            console.log(res);
            res.text()          // convert response to text (response.text() brings promise)
                .then(function (ans) {
                    console.log(ans)
                    finalSum.innerHTML = ans
                });
        });
}*/

let timeout;
function debouncedCalculateSum2() {
    // delay the call to calculateSum2() until its not been called for 100ms

    // cancel the old clock
    clearTimeout(timeout);

    // start new clock
    timeout = setTimeout(() => {
        calculateSum2()
    }, 1000)
}

async function calculateSum2() {
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const finalSum = document.getElementById('finalSum');

    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
    const ans = await response.text();

    finalSum.innerHTML = ans;
    console.log(ans);
}