import { Client } from "pg";
import zod from 'zod'
require('dotenv').config()

const client = new Client({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

// addresses
async function createtable() {
    try {
        await client.connect()
        await client.query(`
            create table addresses (
                id serial primary key,
                city text not null,
                state text not null,
                country text not null,
                user_id integer not null,
                foreign key (user_id) references users(id) on delete cascade
            )
        `)
        console.log('table created:')
    }
    catch (err: any) {
        console.log('table creation failed:')
        throw err
    }
    finally {
        await client.end()
    }
}

async function insertdata(city: string, state: string, country: string) {
    try {
        await client.connect()
        const query = `
        insert into addresses (city, state, country, user_id)
        values ($1, $2, $3, $4)
    `
        const values = [city, state, country, 1]
        await client.query(query, values)
        console.log('insert successful:')
    }
    catch (err: any) {
        console.log('insert failed:')
        throw err
    }
    finally {
        await client.end()
    }
}

// createtable().then(console.error)
// insertdata('pune', 'mh', 'in').then(console.error)

// transactions:
// what queries are run when the user signs up and sends both their information and their address in a single request.
// Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? 
// transactions in SQL to ensure either both the user information and address goes in, or neither does

type User = {
    name: string
    email: string
    password: string
    city: string
    state: string
    country: string
}
const signupschema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    city: zod.string(),
    state: zod.string(),
    country: zod.string()
})

type signuptype = zod.infer<typeof signupschema>

async function signup(user: User | signuptype) {
    try {
        await client.connect()

        // transaction: begin
        await client.query('begin')
        const userquery = `
            insert into users (name, email, password)
            values ($1, $2, $3)
            returning id
        `
        const userdata = [user.name, user.email, user.password]
        const res = await client.query(userquery, userdata)

        const userId = res.rows[0].id
        const addressquery = `
            insert into addresses (city, state, country, user_id)
            values ($1, $2, $3, $4)
        `
        const addressdata = [user.city, user.state, user.country, userId]
        await client.query(addressquery, addressdata)
        await client.query('commit')
        // transaction: commit

        console.log('user and address inserted successful:')
    }
    catch (err: any) {
        console.log('insert failed:')
        throw err
    }
    finally {
        await client.end()
    }
}

signup({
    name: 'ramesh wagh',
    email: 'rameshwagh@gmail.com',
    password: 'rameshwagh',
    city: 'ahmednagar',
    state: 'mh',
    country: 'in'
})
    .then(console.error)