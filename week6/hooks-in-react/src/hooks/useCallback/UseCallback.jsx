import React, { useCallback, useState } from "react";

export function UseCallback() {
    const [counter, setCounter] = useState(0)

    const onClick = () => {                     // function which is not state
        console.log('onclick rendered')
    }

    console.log('app rendered')

    return (
        <>
            {/* function is passed as prop to child */}
            <Child inputFunction={onClick} />

            <button onClick={() => setCounter(counter + 1)}>Count {counter}</button>
        </>
    )
}

const Child = React.memo(({ inputFunction }) => {       // memo will prevent rerender if prop is not changed
    console.log('child rendered')
    return (
        <div>
            <p>hello shubham</p>
            <button onClick={inputFunction}>Click Me</button>
        </div>
    )
})

// still child will be rerendered when counter state is changed [even if function is not changed]
// hence useCallback is used to prevent unnecessary re-renders when passing functions as props to child components
// so we declare functions as variables [const a = () => {}] inside useCallback hook
// and dependency array is passed to know that when only when dependency is changed, then render component again