const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.create({
        username,
        password
    });

    if (user) {
        res.json({
            msg: 'user created successfully'
        })
    }
    else {
        res.json({
            msg: '!user not created'
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.find({
        username,
        password
    });

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        });
    }
    else {
        res.status(411).json({
            msg: 'incorrect username and password'
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    // we will need username to find user
    // while verifying jwt, on successfull verification, we can pass username in request object
    // extract username here from req object
    const username = req.username;

    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    });

    res.json({
        msg: 'Purchase Complete!'
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses
    })
});

module.exports = router