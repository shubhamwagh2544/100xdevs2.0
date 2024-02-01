import { useState } from "react";

function App1() {

    const [title, setTitle] = useState("my name is harkirat");

    function handler() {
        setTitle("my name is " + Math.random())
    }

    return (
        <>
            <button onClick={handler}>Click Here To change Title</button>
            <Header title={title}></Header>
            <Header title={"ok there"}></Header>    {/* unncessary re-renders of this component */}
            <Header title={"ok there"}></Header>    {/* unncessary re-renders of this component */}
            <Header title={"ok there"}></Header>    {/* unncessary re-renders of this component */}
            <Header title={"ok there"}></Header>    {/* unncessary re-renders of this component */}
        </>
    )
}

export default App1;