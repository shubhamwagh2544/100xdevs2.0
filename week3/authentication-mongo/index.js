const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());
const jwtPass = "ssh";

// connect to mongo db
mongoose.connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.dwuqqia.mongodb.net/user_app`
);

// define data model
const User = mongoose.model('Users', {
    username: String,
    password: String,
    name: String
});

// signin
app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // check if user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        res.status(400).json({
            msg: 'User already exists'
        })
    }

    // save to db
    /*
    const newUser = new User({
        username,
        password,
        name
    });
    newUser.save();
    */

    await User.create({ username, password, name });

    // jwt token
    const token = jwt.sign({ username, name }, jwtPass)

    res.status(200).json({
        msg: 'User registered successfully',
        token
    })
})


app.listen(3000, () => console.log('server started running.. '))