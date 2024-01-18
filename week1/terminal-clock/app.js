function terminalClock() {
    const date = new Date();

    const hrs = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    const secs = date.getSeconds().toString().padStart(2, '0');

    console.clear();

    console.log(`${hrs}:${mins}:${secs}`)
}

setInterval(terminalClock, 1000);