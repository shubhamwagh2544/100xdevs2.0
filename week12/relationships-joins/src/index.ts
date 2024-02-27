import { Client } from 'pg'
require('dotenv').config()

const client = new Client({
    //connectionString: 'postgresql://postgres:postgres@localhost:5432/postgres'
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

async function createtable() {
    try {
        await client.connect()
        await client.query(`
            create table users (
                id serial primary key,
                name text not null,
                email text unique not null,
                password text not null
            )
        `)
        console.log('table created:')
    }
    catch (err: any) {
        console.log('connection failed:')
        throw err
    }
    finally {
        await client.end()
    }
}

async function insertdata(name: string, email: string, password: string) {
    try {
        await client.connect()
        const query = `
            insert into users (name, email, password)
            values ($1, $2, $3)
        `
        const values = [name, email, password]
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

async function getuser(email: string) {
    try {
        await client.connect()
        const query = `
            select * from users where email = $1
        `
        const value = [email]
        await client.query(query, value)
        console.log('user fetched successful:')
    }
    catch (err: any) {
        console.log('user fetch failed:')
        throw err
    }
    finally {
        await client.end()
    }
}

// createtable().then(console.error)
// insertdata('shubham wagh', 'shubhamwagh@gmail.com', 'shubhamwagh').then(console.error)
// getuser('shubhamwagh@gmail.com').then(console.error)