import request from 'supertest'
import { describe, it, expect } from 'vitest'
import { app } from '..'

describe('Testing Zod POST Endpoint', () => {
    // positive scenario
    it('adds 2 positive numbers', async () => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3)
    })

    // invalid inputs
    it('validates sum for invalid inputs', async () => {
        const res = await request(app).post('/sum').send({
            a: ["dasd", "dasdsa"]
        })
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe('invalid inputs')
    })

    // no inputs
    it('validates sum for no inputs', async () => {
        const res = await request(app).post('/sum').send({})
        expect(res.statusCode).toBe(411)
        expect(res.body.message).toBe('invalid inputs')
    })
})

describe('Testing Zod GET endpoint', () => {
    // positive scenario
    it('add 2 positive numbers', async () => {
        const res = await request(app).get('/sum').set({
            a: "1",
            b: "1"
        }).send()
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(2)
    })

    //  invalid input headers
    it('validates sum for invalid input headers', async () => {
        const res = await request(app).get('/sum').set({
            a: "string",
            b: "false"
        })
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe('invalid inputs')
    })

    // no input headers
    it('validates sum for no input headers', async () => {
        const res = await request(app).get('/sum').send()
        expect(res.statusCode).toBe(411)
        expect(res.body.message).toBe('invalid inputs')
    })
})