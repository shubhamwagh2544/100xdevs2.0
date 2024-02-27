import { Client } from 'pg'
require('dotenv').config()

const client = new Client({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

async function innerjoin(userId: number) {
    try {
        await client.connect()
        const query = `
            select u.name, u.email, a.city, a.state, a.country
            from users u
            inner join addresses a
            on a.user_id = u.id
            where u.id = $1
        `
        const id = [userId]
        const res = await client.query(query, id)
        console.log('data fetched via joins: ', res.rows[0])
    }
    catch (err: any) {
        console.log('data fetch failed:')
        throw err
    }
    finally {
        await client.end()
    }
}

innerjoin(1).then(console.error)
// innerjoin(3).then(console.error)