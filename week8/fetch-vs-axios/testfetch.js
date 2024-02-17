async function testfetch() {
    // way 1
    fetch('https://sum-server.100xdevs.com/todos')
        .then(async (res) => {
            const response = await res.json()       // since we know fetching 100xdevs returns json data
            //console.log(response)
        })

    // way 2
    const res = await fetch('https://sum-server.100xdevs.com/todos')
    const json = await res.json()
    //console.log(json)

    // post
    const postRes = await fetch('https://www.toptal.com/developers/postbin/1708093470281-6327002441976', {
        method: "POST",
        body: {
            username: 'shubhamwagh',
            password: '12345'
        },
        headers: {
            Authorization: 'Bearer 123'
        }
    })
    const textData = await postRes.text()       // since we know fetch
    console.log(textData)
}

testfetch()