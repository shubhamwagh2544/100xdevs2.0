const zod = require('zod');

function inputValidator(input) {
    // define input validation scheme (blueprint for input validation)
    const scheme = zod.object({
        email: zod.string().email(),
        number: zod.number(),
        bool_array: zod.array(zod.boolean())
    });

    const response = scheme.safeParse(input);
    console.log(response.success);
}

inputValidator({
    email: "shubhamwagh2544@gmail.com",
    number: 25,
    bool_array: [true, false]
});


function inputValidator2({ username, password }) {
    const schema2 = zod.object({
        username: zod.string().email(),
        firstname: zod.string(),
        lastname: zod.string(),
        password: zod.string()
    })

    const res = schema2.safeParse({ username, password })
    if (!res.success) {
        console.log('success')
    }
    else {
        console.log('failure')
    }
}

inputValidator2({
    username: 'shubhamwagh@gmail.com',
    password: 'shubhamwagh'
})