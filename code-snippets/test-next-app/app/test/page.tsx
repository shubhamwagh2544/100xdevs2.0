export async function callme() {
    const res = await fetch('https://sum-server.100xdevs.com/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    // return {
    //     props: {
    //         data
    //     }
    // }
    return data
}

export default async function Page() {
    const data = await callme()
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}