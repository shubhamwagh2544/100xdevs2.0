function calculateSum() {
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