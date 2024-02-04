import { useState } from "react"

function PropDrlling() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Counter count={count} setCount={setCount} />  {/* just because Button needed setCount prop, Counter component also need to pass down this prop */}
        </div>
    )
}

function Counter({ count, setCount }) {     // Counter only need count prop and not setCount
    return (
        <div>
            {count}
            <Button count={count} setCount={setCount} />
        </div>
    )
}

function Button({ count, setCount }) {
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

export default PropDrlling

// Prop Drilling : process of passing down props (properties) through multiple layers of nested components 
// Why not good : bad visual representation of code
// difficulty in maintainability of react app as app grows complex
// makes react app more verbose