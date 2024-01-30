const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    // Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            req.username = decodedValue.username;       // pass username in request object
            next();
        }
        else {
            res.json({
                msg: 'you are not authenticated'
            });
        }
    }
    catch (e) {
        res.json({
            msg: 'incorrect inputs'
        })
    }
}

module.exports = userMiddleware;