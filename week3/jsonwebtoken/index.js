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
        const token = jwt.sign({ username: username, password: password }, jwtPassword);
        console.log(token);
        return { user, token };
    }
    else {
        console.log('something went wrong: invalid credentials')
        return;
    }
}

function verifyJwt(token, user) {
    const decode = jwt.verify(token, jwtPassword);
    console.log(decode);
    /*
        {
            username: 'shubhamwagh@gmail.com',
            password: 'shubhamwa',
            iat: 1706294182
        }
    */
    if (decode.username === user.username && decode.password === user.password) {
        console.log('token verified successfully..')
    }
    else {
        console.log('invalid token..');
    }
}



const { user, token } = signJwt({
    username: 'shubhamwagh@gmail.com',
    password: 'shubhamwa'
});
console.log(token);

verifyJwt(token, user);