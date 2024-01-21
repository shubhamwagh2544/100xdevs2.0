const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


// dummy (in-memory) data
const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false
            }
        ]
    },
    {
        name: "Jane",
        kidneys: [
            {
                healthy: true
            },
            {
                healthy: false
            }
        ]
    }
];

//get : user can check how many kidneys he has and whether they are healthy
app.get("/users/:name/kidneys", function (req, res) {
    const name = req.params.name.toLowerCase();
    //const { name } = req.params;
    const user = users.find((user) => user.name.toLowerCase() === name);

    /*let user = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase() === name) {
            user = users[i];
            break;
        }
    }
    console.log(user);*/

    if (!user) {
        res.status(200).json({
            msg: "User not found"
        });
        return;
    }

    res.send(user.kidneys);
});

//post : usere can add a new kidney
app.post("/users/:name/kidneys", function (req, res) {
    const name = req.params.name.toLowerCase();
    const user = users.find((user) => user.name.toLowerCase() === name);

    if (!user) {
        res.status(200).json({
            msg: "User not found"
        });
        return;
    };

    //kidney: req.body.kidney
    const kidney = req.body;

    user.kidneys.push(kidney);

    //res.send(user.kidneys);
    res.status(201).json({
        msg: "Success:Created"
    });
})

//put : user can update the health of a kidney : make all kidneys healthy
app.put("/users/:name/kidneys", function (req, res) {
    const name = req.params.name.toLowerCase();
    const user = users.find((user) => user.name.toLowerCase() === name);

    if (!user) {
        res.send("User not found");
        return;
    };

    if (!isUnhealtyKidney(user)) {
        res.status(200).json({
            msg: "All kidneys are healthy"
        });
    }
    else {
        for (let i = 0; i < user.kidneys.length; i++) {
            if (!user.kidneys[i].healthy) {
                user.kidneys[i].healthy = true;
            }
        }
        res.status(200).json({
            msg: "Success"
        });
    }
})


//delete : user can remove a kidney : remove all unhealty kidneys
app.delete("/users/:name/kidneys", function (req, res) {
    const name = req.params.name.toLowerCase();
    const user = users.find((user) => user.name.toLowerCase() === name);

    if (!user) {
        res.send("User not Found");
        return;
    }

    if (!isUnhealtyKidney(user)) {
        res.status(200).json({
            msg: "All kidneys are healthy"
        });
    }
    else {
        for (let i = 0; i < user.kidneys.length; i++) {
            if (!user.kidneys[i].healthy) {
                user.kidneys.splice(i, 1);
            }
        }
        res.status(200).json({
            msg: "Success"
        });
    }
})


function isUnhealtyKidney(user) {
    let ifUnhealthy = false;
    for (let i = 0; i < user.kidneys.length; i++) {
        if (!user.kidneys[i].healthy) {
            ifUnhealthy = true;
            break;
        }
    }
    return ifUnhealthy;
}

app.listen(port, () => console.log(`App is listening on port : ${port}`));