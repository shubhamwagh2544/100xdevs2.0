import axios from "axios";

async function getUsersData() {
    // delay for 5 sec
    await new Promise((r) => setTimeout(r, 5000))

    //const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
    const response = await axios.get('http://localhost:3000/api/user')
    return response.data
}

// async component
export default async function User() {
    const userDetails = await getUsersData()

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        Name: {userDetails?.name}
                    </div>

                    {userDetails?.email}
                </div>
            </div>
        </div>
    )
}