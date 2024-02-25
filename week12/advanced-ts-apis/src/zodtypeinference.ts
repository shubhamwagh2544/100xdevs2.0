import zod from 'zod'
import express from 'express'
const app = express()

const ZodStringSchema = zod.string()            // runtime variable
type ZodStringType = zod.infer<typeof ZodStringSchema>  // compile-time variable

// use case
const UpdateBodySchema = zod.object({
    name: zod.string(),
    age: zod.number(),
    username: zod.string()
})
// writing same type as above : code duplication
type UpdateBodyType = {
    name: string
    age: number
    username: string
}

// type inference with zod
type UpdateBodyTypeInference = zod.infer<typeof UpdateBodySchema>

app.get('/', (req, res) => {
    //const updateBody: UpdateBodyType = req.body
    const updateBody: UpdateBodyTypeInference = req.body
    const { success } = UpdateBodySchema.safeParse(req.body)
    // logic

    return res.status(200).json({
        message: 'Success!'
    })
})


app.listen(3000, () => { console.log('Server is running on port 3000') })