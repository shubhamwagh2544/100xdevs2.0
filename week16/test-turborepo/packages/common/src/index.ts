const zod = require('zod')

const schema = zod.object({
    name: zod.string(),
    age: zod.number(),
})

export const BACKEND_URL = 'http://localhost:5555'
export { schema }