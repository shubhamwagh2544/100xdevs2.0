import { Client } from "pg"

// create client
const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/temp'
})


async function getUser(email: string) {
    try {
        await client.connect()

        const query = `
            select * from users where email=$1
        `
        const input = [email]

        // get user
        const res = await client.query(query, input)
        //console.log('user fetched: ', res)
        console.log('success: ', res.rows[0])
    }
    catch (err) {
        console.log('error while fetching: ', err)
    }
    finally {
        await client.end()
    }
}

getUser('hellouser@gmail.com')