import CounterAppRecoil from "./with-recoil/CounterApp"
import CounterApp from "./without-recoil/CounterApp"

function App() {
  return (
    <div>
      {/* <CounterApp /> */}
      <CounterAppRecoil />
    </div>
  )
}

export default App
