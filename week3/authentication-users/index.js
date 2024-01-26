/* 
let people sign up to your website
only allow signed up users to see people [dummy people list]

2 endpoints:
POST/signin : returns json web token with username encrypted
GET/users : returns userlist if user is signed in else 403
*/

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const jwtPassword = "123456";
app.use(express.json());

const ALL_USERS = [
    {
        username: "shubhamwagh@gmail.com",
        password: "shubhamwagh",
        name: "shubham wagh"
    },
    {
        username: "rameshwagh@gmail.com",
        password: "rameshwagh",
        name: "ramesh wagh"
    },
    {
        username: "jayashriwagh@gmail.com",
        password: "jayashriwagh",
        name: "jayashri wagh"
    }
];

function ifUserExists(username, password) {
    // returns true/false if user exists in userslist
    const user = ALL_USERS.find(
        (obj) => obj.username === username && obj.password === password
    );

    if (user != undefined) {
        return true;
    }
    return false;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!ifUserExists(username, password)) {
        res.status(401).json({
            msg: "You are not authenticated"
        })
    }
    else {
        const token = jwt.sign({ username: username }, jwtPassword)
        res.status(200).json({
            msg: "success",
            token
        })
    }
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token, jwtPassword)
        const username = decode.username;

        // return users without this username
        return res.status(200).json({
            users: ALL_USERS.filter((user) => user.username != username)
        })
    }
    catch (err) {
        res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(3000, () => console.log("server started"));