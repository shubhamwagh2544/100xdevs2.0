type User = {
    name: string
    email: string
    password: string
}

type Users = {
    [key: string]: User
}

const users: Users = {
    "_id1": {
        name: "shubham",
        email: "test@gmail.com",
        password: "test"
    },
    "_id2": {
        name: "ramesh",
        email: "test@gmail.com",
        password: "test"
    }
}

// this syntax looks ugly
// Record API : Record<Keys, Type> : Constructs an object type whose property keys are Keys and whose property values are Type.

type UserRecord = Record<string, User>
const userRecord: UserRecord = {
    "_id1": {
        name: "shubham",
        email: "test@gmail.com",
        password: "test"
    },
    "_id2": {
        name: "ramesh",
        email: "test@gmail.com",
        password: "test"
    }
}