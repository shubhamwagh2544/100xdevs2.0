import axios from "axios";

async function getUserData() {
  //const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data
}

// async component
export default async function Home() {
  const userdetails = await getUserData()
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userdetails?.name}
                </div>
                
                {userdetails?.email}
            </div>
        </div>
    </div>
  );
}
