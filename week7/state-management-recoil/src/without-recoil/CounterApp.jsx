import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";


function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={count}>
                <Counter setCount={setCount} />
            </CountContext.Provider>
        </div>
    )
}

function Counter({ setCount }) {
    return (
        <div>
            <CountRenderer />
            <Button setCount={setCount} />
        </div>
    )
}

function CountRenderer() {
    const count = useContext(CountContext)
    return (
        <div>
            {count}
        </div>
    )
}

function Button({ setCount }) {
    const count = useContext(CountContext)
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>

            <button onClick={() => {
                setCount(count - 1);
            }}>Decrement</button>
        </div>
    )
}

export default CounterApp