const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    }).then(function () {
        res.json({
            msg: 'Admin created successfully'
        })
    }).catch(function () {
        res.json({
            msg: '!user not created'
        })
    })

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