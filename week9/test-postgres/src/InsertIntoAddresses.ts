import { Client } from "pg"

// create client
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'temp',
    user: 'postgres',
    password: 'postgres'
})

async function insertIntoAddressesWithParametrizedInput(
    user_id: number, city: string, country: string, street: string, pincode: string
) {
    try {
        // open connection
        await client.connect()

        // query
        const userQuery = `
            INSERT INTO 
            addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        const userInput = [user_id, city, country, street, pincode]

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

insertIntoAddressesWithParametrizedInput(
    1, 'New York', 'USA', '123 Broadway St', '10001'
)


async function fetchAddressOfUser(userid: number) {
    try {
        await client.connect()

        const query = `
            select city, country, pincode, street
            from addresses
            where user_id=$1
        `

        const input = [userid]

        const res = client.query(query, input)
        console.log('address fetched: ', (await res).rows)
    }
    catch (err) {
        console.error(err)
    }
    finally {
        await client.end()
    }
}

fetchAddressOfUser(1)