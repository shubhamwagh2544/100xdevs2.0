import { Client } from "pg"

// create client
const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/temp'
})


async function createUsersTable() {
    try {
        await client.connect()

        // create table
        const result = await client.query(`
            create table users (
                id serial primary key,
                username varchar(255) unique not null,
                email varchar(255) unique not null,
                password varchar(255) not null,
                created_at timestamp with time zone default current_timestamp
            );
        `)
        console.log(result)
    }
    catch (err) {
        console.log('table not created', err)
    }
    finally {
        await client.end()
    }
}

createUsersTable()