import express from 'express';
import { Request, Response } from 'express';
import cookieparser from 'cookie-parser';
import jwt, { JwtPayload } from 'jsonwebtoken'
import cors from 'cors'
const app = express()

app.use(cookieparser())
app.use(express.json())
app.use(cors({
    credentials: true,          // This is important for cookies to be saved in the browser
    origin: "http://localhost:5173"
}))

app.post('/signup', (req: Request, res: Response) => {
    const username: string = req.body.username;
    const password: string = req.body.password;
    const token = jwt.sign({
        username
    }, "TEST_SECRET")
    res.cookie("token", token)

    res.status(201).send("User signed up");
});

app.get('/me', (req: Request, res: Response) => {
    const token: string = req.cookies.token;
    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    try {
        const decoded = jwt.verify(token, "TEST_SECRET") as JwtPayload;
        res.send(decoded);
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
});

app.post('/logout', (req: Request, res: Response) => {
    res.clearCookie("token");
    // res.cookie("token", "");
    res.send("Logged out");
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});