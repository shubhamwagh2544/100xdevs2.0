const axios = require("axios")

async function testaxios() {
    // axios knows if data is json or text
    const res = await axios.get('https://sum-server.100xdevs.com/todos')
    console.log(res.data)

    // post
    // 1. url
    // 2. body for post
    // 3. headers
    const response = await axios.post('https://httpdump.app/dumps/d96fbee1-9766-4cf3-a66e-aeedde07350d', {
        username: 'shubhamwagh',
        password: '12345'
    }, {
        headers: {
            Authorization: 'Bearer 123'
        }
    })
    console.log(response.data)

    // get
    // 1. url
    // 2. headers (body is not accepted as 2nd arg)
    const resp = await axios.get('https://httpdump.app/dumps/d96fbee1-9766-4cf3-a66e-aeedde07350d?query1=25&query2=30', {
        headers: {
            Authorization: 'Bearer 12345'
        }
    })
    console.log(resp.data)

    // way 2 axios
    const axiosResponse = await axios({
        method: 'post',
        url: 'https://httpdump.app/dumps/d96fbee1-9766-4cf3-a66e-aeedde07350d?query1=25&query2=30',
        data: {
            username: 'shubhamwagh',
            password: '12345'
        },
        headers: {
            Authorization: 'Bearer 123'
        }
    })
    console.log(axiosResponse.data)
}

testaxios()