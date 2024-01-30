import { useState } from "react"

function App() {
  // state
  const [count, setCount] = useState(0);

  return (
    <CustomButton count={count} setCount={setCount}></CustomButton>
  )
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>
}

export default App