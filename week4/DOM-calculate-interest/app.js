async function calculateInterest() {
    const principle = document.getElementById('principle').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
    const finalResult = document.getElementById('finalResult');

    const response = await fetch(
        "https://sum-server.100xdevs.com/interest?principle=" + principle + "&rate=" + rate + "&time=" + time
    );

    const finalAns = await response.text();

    console.log(finalAns);
    finalResult.innerHTML = finalAns;
}