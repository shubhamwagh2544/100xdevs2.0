import { useEffect, useState } from "react"

// slight good code
export function UseMemo2() {

    const [counter, increaseCounter] = useState(0);
    const [initialValue, setInitialValue] = useState(0);
    const [finalValue, setFinalValue] = useState(0);

    useEffect(() => {
        console.log('effect called')
        let sum = 0;
        for (let i = 1; i <= initialValue; i++) {
            sum += i;
        }
        setFinalValue(sum);     // app rerendered when initialValue changed + setFinalValue changed app state (2 app rerenders)
    }, [initialValue])

    console.log('app rendered')

    return (
        <div>
            <input type="text" placeholder="number" onChange={(e) => {
                setInitialValue(e.target.value);
            }} /> <br /><br />

            <div>Sum is {finalValue}</div> <br />

            <button onClick={() => increaseCounter(counter + 1)}>Counter {counter}</button>
        </div>
    )
}