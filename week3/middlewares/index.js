const express = require('express');
const app = express();
app.use(express.json());

// without middleware
app.get("/no-middleware", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const kidney = req.query.kidney;

    if (username != "admin" && password != "admin") {
        res.status(401).json({
            msg: "Invalid Credentials"
        });
    }

    if (kidney != 1 && kidney != 2) {
        res.status(404).json({
            msg: "Invalid Kidney"
        });
    }

    // if all okay
    res.json({
        msg: "Success"
    })
})


// with middleware
function isUserValid(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "admin" && password != "admin") {
        res.status(401).json({
            msg: "Invalid Credentials"
        });
    }

    next();
}

function isKindeyValid(req, res, next) {
    const kidney = req.query.kidney;

    if (kidney != 1 && kidney != 2) {
        res.status(404).json({
            msg: "Invalid Kidney"
        });
    }

    next();
}

app.get("/with-middleware", isUserValid, isKindeyValid, (req, res) => {
    if (isUserValid && isKindeyValid) {
        res.json({
            msg: "Success"
        })
    }
});


// 404 : not found
app.get("*", (req, res) => {
    res.status(404).send("Not Found")
});

//global error handler
app.use(function (err, req, res, next) {
    res
        .status(500)
        .send("Sorry! Something went wrong.")

})

app.listen(3000, () => console.log("Server is running..."));