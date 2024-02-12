import express, { Request, Response } from 'express'
import cors from 'cors'
import { User } from '../interfaces/User'
import { findUser } from '../db/FindUser'
import { saveUser } from '../db/SaveUser'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


app.post('/register', async (req: Request, res: Response) => {
    //check if user is present in database
    const { firstname, lastname, email, password } = req.body

    const user: User = await findUser(email)

    if (!user) {
        // save user
        const finalRes = await saveUser(firstname, lastname, email, password)
        if (finalRes) {
            return res.json({
                result: 'success',
                msg: 'registration successful'
            })
        } else {
            return res.json({
                result: 'failure',
                msg: 'user not saved'
            })
        }
    } else {
        return res.json({
            result: 'failure',
            msg: 'conflict: another user exists'
        })
    }
})

app.listen(port, () => console.log('server started listening on port : ', port))