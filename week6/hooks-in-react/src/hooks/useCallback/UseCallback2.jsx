import React, { useCallback, useState } from "react";

export function UseCallback2() {
    const [counter, setCounter] = useState(0)

    const onClick = useCallback(() => {         // prevents rerenders of Child when fn is passed as prop to child component
        console.log('onclick rendered')
    }, [])

    console.log('app rendered')

    return (
        <>
            <Child inputFunction={onClick} />
            <button onClick={() => setCounter(counter + 1)}>Count {counter}</button>
        </>
    )
}

const Child = React.memo(({ inputFunction }) => {   // memo will prevent rerenders if props is not changed
    console.log('child rendered')
    return (
        <div>
            <p>hello shubham</p>
            <button onClick={inputFunction}>Click Me</button>
        </div>
    )
})