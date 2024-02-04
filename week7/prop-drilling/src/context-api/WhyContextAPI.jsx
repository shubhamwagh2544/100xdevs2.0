import { useState } from "react"

/*
          ContextAPI        {count}
              |
           Counter          {count}
            /   \
           /     \
  CountRenderer  Button     {count}

  how can we pass {count} from ContextAPI component to CountRenderer and Button components without drilling it down through Counter component
*/

function WhyContextAPI() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Counter count={count} setCount={setCount} />
        </div>
    )
}

function Counter({ count, setCount }) {
    return (
        <div>
            <CountRenderer count={count} />
            <Button count={count} setCount={setCount} />
        </div>
    )
}

function CountRenderer({ count }) {
    return (
        <div>
            {count}
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

export default WhyContextAPI

// why context api : it lets you to teleport props from one component to another component with passing it down the chain