import express, { Request, Response, NextFunction } from "express";
import swaggerUi from 'swagger-ui-express';
import { openapispec } from "./openapi/openapispec";
const app = express()

app.use(express.json())

// users data
const users = [
    { id: 1, name: "shubham wagh" },
    { id: 2, name: "ramesh wagh" },
    { id: 3, name: "jayashri wagh" },
    { id: 4, name: "tushar wagh" },
    { id: 5, name: "tanvi wagh" },
]

// GET users endpoint
app.get('/users', (req: Request, res: Response) => {
    const name = req.query.name as string;
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
    if (filteredUsers.length > 0) {
        return res.status(200).json({
            users: filteredUsers
        })
    }
    else {
        return res.status(200).json({
            message: 'no users found...'
        })
    }
})

// openapispec
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(openapispec))

// server listening
app.listen(3000, () => console.log('server started on 3000'))