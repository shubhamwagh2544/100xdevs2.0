const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

function sum(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }
    return result;
}

app.get("/", function (req, res) {
    /*
    let filePath = path.join(__dirname, "./design.html");
    // what is __dirname?
    console.log(__dirname);
    //res.sendFile(filePath);
    //res.send("<h1>hello world</h1>");
    //res.send("Hello World");
    const user = {
        name: "John",
        age: 20
    };
    res.send(user);
    */

    const n = req.query.n;
    const result = sum(n);
    res.send(`Result is ${result}`);
});

app.listen(port, function () {
    console.log(`App is listening on port : ${port}`);
});