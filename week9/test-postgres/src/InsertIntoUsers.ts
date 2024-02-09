import { Client } from "pg"

// create client
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'temp',
    user: 'postgres',
    password: 'postgres'
})


async function insertIntoUsers() {
    try {
        // open connection
        await client.connect()

        // insert data
        const res = await client.query(`
            insert into 
            users(id, username, email, password)
            values(1, 'shubhamwagh2544', 'shubhamwagh@gmail.com', 'shubhamwagh')
        `)
        // not so safe way
        // user can put delete query in values fields and database may get compromised
        // SQL Injection

        console.log('insertion successfull: ', res)
    }
    catch (err) {
        console.log('error during insertion', err)
    }
    finally {
        // close connection
        await client.end()
    }
}

//insertIntoUsers()

async function insertIntoUsersWithParametrizedInput(
    id: number, username: string, email: string, password: string
) {
    try {
        // open connection
        await client.connect()

        // query
        const userQuery = `
            insert into 
            users(id, username, email, password)
            values($1, $2, $3, $4)
        `;
        const userInput = [id, username, email, password]

        // insert data
        const res = await client.query(userQuery, userInput)
        console.log('insertion successfull: ', res)
    }
    catch (err) {
        console.log('error during insertion', err)
    }
    finally {
        // close connection
        await client.end()
    }
}

insertIntoUsersWithParametrizedInput(
    2, 'hellouser', 'hellouser@gmail.com', 'hellopassword'
)