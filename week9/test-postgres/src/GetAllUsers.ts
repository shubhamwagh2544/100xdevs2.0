import { Client } from "pg"

// create client
const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/temp'
})


async function getAllUsers() {
    try {
        await client.connect()

        const query = `
            select * from users
        `

        // get all users
        const res = await client.query(query)

        console.log('success: ', res.rows)
    }
    catch (err) {
        console.log('error while fetching: ', err)
    }
    finally {
        await client.end()
    }
}

getAllUsers()