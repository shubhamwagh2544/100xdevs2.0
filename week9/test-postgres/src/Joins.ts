import { Client } from "pg"

// create client
const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/temp'
})


async function fetchUserDetailsAndAddresses(userId: number) {
    try {
        await client.connect()

        const query = `
            select u.id, u.username, u.email, u.password,
            a.city, a.country, a.street, a.pincode
            from users u
            join addresses a
            on u.id = a.user_id
            where u.id = $1
        `

        const input = [userId]

        const res = await client.query(query, input)
        console.log('details fetched: ', res.rows)
    }
    catch (err) {
        console.error(err)
    }
    finally {
        await client.end()
    }
}

fetchUserDetailsAndAddresses(1)