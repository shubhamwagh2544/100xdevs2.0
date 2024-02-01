import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState("my name is harkirat");

  function handler() {
    setTitle("my name is " + Math.random())
  }

  return (
    <div>
      <button onClick={handler}>Click Here To Change Title</button>
      <Header title={title}></Header>
      <Header title={"hey there harkirat"}></Header>
      <Header title={"hey there harkirat"}></Header>
      <Header title={"hey there harkirat"}></Header>
      <Header title={"hey there harkirat"}></Header>
      <Header title={"hey there harkirat"}></Header>
      <Header title={"hey there harkirat"}></Header>
    </div>
  )
}

const Header = React.memo(function Header({ title }) {    //memo prevents unnecessary renders when the component's props have not changed
  return (
    <div>
      {title}
    </div>
  )
})

export default App;