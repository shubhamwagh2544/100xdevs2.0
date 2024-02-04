import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";

// wrap anyone that wants to teleport props down to chain inside a provider
// add teleported value as prop to provider

// why Context API : its more of syntactical sugar over prop drilling [on other hand, recoil redux are optimised libraries for performant state management of react app]

// context api solves
// 1. solves prop drilling
// 2. it does not avoid app rerenders
// 3. its just makes syntax cleaner

function Solution() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

function Counter() {
    const { setCount } = useContext(CountContext)
    return (
        <div>
            <CountRenderer />
            <Button setCount={setCount} />
        </div>
    )
}

function CountRenderer() {
    const { count } = useContext(CountContext)
    return (
        <div>
            {count}
        </div>
    )
}

function Button() {
    const { count, setCount } = useContext(CountContext)
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

export default Solution