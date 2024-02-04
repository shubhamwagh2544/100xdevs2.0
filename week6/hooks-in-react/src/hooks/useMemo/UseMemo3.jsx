import { useEffect, useMemo, useState } from "react"

// good code
export function UseMemo3() {

    const [counter, increaseCounter] = useState(0);
    const [initialValue, setInitialValue] = useState(0);

    let finalSum = useMemo(() => {          // useMemo helps in getting new derived state from existing state
        console.log('memo called')
        let sum = 0;
        for (let i = 1; i <= initialValue; i++) {
            sum += i;
        }
        return sum;
    }, [initialValue])      // only when initialValue changed, app rerendered (single app rerender)

    console.log('app rendered')

    return (
        <div>
            <input type="text" placeholder="number" onChange={(e) => {
                setInitialValue(e.target.value);
            }} /> <br /><br />

            <div>Sum is {finalSum}</div> <br />

            <button onClick={() => increaseCounter(counter + 1)}>Counter {counter}</button>
        </div>
    )
}