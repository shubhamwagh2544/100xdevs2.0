import { useState } from "react"

// bad code
export function UseMemo() {

    const [counter, increaseCounter] = useState(0);     //change in state causes to calculate sum everytime [re-renders]
    const [number, sumUptoNumer] = useState(0);

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return (
        <>
            <input type="text" placeholder="number" onChange={(e) => {
                sumUptoNumer(e.target.value);
            }} /> <br /><br />

            <div>Sum is {sum}</div> <br />

            <button onClick={() => increaseCounter(counter + 1)}>Counter {counter}</button>
        </>
    )
}

// create app that does 2 things
// increases counter by 1
// let user put value in input box and shows sum from 1-N
// everything inside single App