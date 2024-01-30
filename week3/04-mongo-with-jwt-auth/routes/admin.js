const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const JWT_SECRET = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const response = await Admin.create({
        username,
        password
    })

    if (response) {
        res.json({
            msg: 'admin created successfully'
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.find({
        username,
        password
    })

    if (admin) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    }
    else {
        res.status(411).json({
            msg: 'incorrect username and password'
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const courseCreated = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        msg: 'Course created succcessfullly',
        courseId: courseCreated._id
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    });
});

module.exports = router;