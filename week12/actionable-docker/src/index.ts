import { Client } from 'pg'

const client = new Client({
    connectionString: 'postgresql://shubhamwagh:shubhamwagh@localhost:5434/testdocker'
});

async function testConnection() {
    try {
        await client.connect()
        const res = await client.query('select now()')
        console.log('connection successful: ', res.rows)
    }
    catch (err: any) {
        console.log('connection failed', err.stack)
    }
    finally {
        await client.end()
    }
}

testConnection()


// map native port 5434 to container port 5432
// postgres listening on 5434 redirected to 5432 of container

// docker run -e POSTGRES_USER=shubhamwagh -e POSTGRES_PASSWORD=shubhamwagh -e POSTGRES_DB=testdocker -p 5434:5432 -d postgres
// docker exec -it a4599b50353a psql -U shubhamwagh -d testdocker