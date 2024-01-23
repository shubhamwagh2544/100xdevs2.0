const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    const kidneys = req.body.kidneys;

    // this will crash the server if kidneys is undefined or not an array
    console.log(kidneys.length);

    res.send(`I have ${kidneys.length} kidneys`);
})

// if input valiadation fails, the server will crash
// and the user will see a 500 error with error details
// to fix this, we can use a global catch all error handler

// what is global catch : Error Handling Middleware

app.use(function (err, req, res, next) {
    res
        .status(500)
        .send("Sorry! Something went wrong.")
})


app.listen(3000);