import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '..'

describe('Testing Express Server', () => {
    // POST
    it('should return sum of positive numbers', async () => {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        });

        console.log("res: ", res)

        expect(res.statusCode).toBe(200);
        expect(res.body.sum).toBe(3);
    })
})