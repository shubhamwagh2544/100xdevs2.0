import axios from "axios";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getUsersData() {
    // delay for 5 sec
    await new Promise((r) => setTimeout(r, 5000))

    //const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
    //const response = await axios.get('http://localhost:3000/api/user')

    // getUserDetails runs on the server. This means you’re sending a request from a server back to the server
    // better solution
    try {
        const user = await prisma.user.findFirst({})
        return {
            name: user?.id,
            email: user?.username
        }
    }
    catch (e) {
        console.log(e)
        return {
            name: "hardcoded name",
            email: "hardcoded email"
        }
    }
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
                    <div>
                        Email: {userDetails?.email}
                    </div>
                </div>
            </div>
        </div>
    )
}