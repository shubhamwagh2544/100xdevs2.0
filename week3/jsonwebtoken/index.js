const jwt = require("jsonwebtoken");
const zod = require('zod');
const { jwtPassword } = require("../02-jwt");

const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(5).max(10)
});

function validCredentials(username, password) {
    const response = schema.safeParse({ username: username, password: password });
    if (response.success) return true;
    else return false;
}

function signJwt(user) {
    // sign
    const username = user.username;
    const password = user.password;

    if (validCredentials(username, password)) {
        const token = jwt.sign({ username: username, password: password }, jwtPassword);    // sign(payload, secret)
        console.log(token);
        return { user, token };
    }
    else {
        console.log('something went wrong: invalid credentials')
        return;
    }
}

// if secret is changed, jwt will be rejected saying invalid signature
function verifyJwt(token, user) {
    const verified = jwt.verify(token, jwtPassword);      // verify(token, secret)
    console.log(verified);
    /*
        {
            username: 'shubhamwagh@gmail.com',
            password: 'shubhamwa',
            iat: 1706294182
        }
    */
    if (verified.username === user.username && verified.password === user.password) {
        console.log('token verified successfully..')
    }
    else {
        console.log('invalid token..');
    }
}

// anybody can decode jwt but only server can verify its authenticity with secret key
function decodeJwt(token) {
    const decoded = jwt.decode(token);      // decode(token)
    console.log(decoded);
    /*
        {
            username: 'shubhamwagh@gmail.com',
            password: 'shubhamwa',
            iat: 1706294182
        }
    */
}


const { user, token } = signJwt({
    username: 'shubhamwagh@gmail.com',
    password: 'shubhamwa'
});
console.log(token);

decodeJwt(token);

verifyJwt(token, user);
