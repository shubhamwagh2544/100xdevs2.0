import { useState } from "react";

function App2() {
    return (
        <>
            <HeaderWithState></HeaderWithState>
            <Header title={"hey there harkirat"} />
            <Header title={"hey there harkirat"} />
            <Header title={"hey there harkirat"} />
            <Header title={"hey there harkirat"} />
            <Header title={"hey there harkirat"} />
        </>
    )
}

function HeaderWithState() {
    const [title, setTitle] = useState("my name is harkirat");

    function handler() {
        setTitle("my name is " + Math.random())
    }

    return (
        <>
            <button onClick={handler}>Click To Change Title</button>
            <Header title={title}></Header>
        </>
    )
}

function Header({ title }) {
    return <div>
        {title}
    </div>
}

export default App2;