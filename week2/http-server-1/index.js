const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.get("/", function (req, res) {
    let filePath = path.join(__dirname, "./design.html");
    // what is __dirname?
    console.log(__dirname);
    //res.sendFile(filePath);
    res.send("<h1>hello world</h1>");
});

app.listen(port, function () {
    console.log(`App is listening on port : ${port}`);
});