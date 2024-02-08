import { Client } from "pg"

const client = new Client({
    connectionString: 'postgresql://postgres:postgres@localhost:5432/temp'
})


async function createUsersTable() {
    await client.connect()
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

createUsersTable()