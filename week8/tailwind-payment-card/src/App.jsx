import { MainRevenueCard } from "./components/MainRevenue"
import { RevenueCard } from "./components/RevenueCard"

function App() {

  return (
    <div className="grid grid-cols-3 gap-5 p-5 justify-center items-center">
      <div className="col-span-1">
        <MainRevenueCard title={'Amount Pending'} orderCount={"13"} amount={"92,312.20"} />
      </div>
      <div className="col-auto">
        <RevenueCard title={'Amount Pending'} orderCount={"13"} amount={"92,312.20"} />
      </div>
      <div className="col-auto">
        <RevenueCard title={'Amount Processed'} amount={"23,92,312.19"} />
      </div>
    </div>
  )
}



export default App
