import mongoose from 'mongoose';
import { TestModel } from './schema'

type User = {
    firstname: string;
    lastname: string;
}

async function testConnection({ firstname, lastname }: User) {
    try {
        const res = await TestModel.create({
            firstname,
            lastname
        })
        console.log('connection successful: ', res)
    }
    catch (err: any) {
        console.log('connection failed', err.stack)
    }
    finally {
        mongoose.connection.close()
    }
}

testConnection({
    firstname: 'shubham',
    lastname: 'wagh'
})


// mongo url: mongodb://localhost:27017
// map port from local 27017 to container 27017

// docker run -p 27017:27017 -d mongo