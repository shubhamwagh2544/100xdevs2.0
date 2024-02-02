import { useEffect, useState } from "react"

// below piece will run indefinately
export function UseEffectVariation() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(counter + 1);
    }, [counter])

    return <button>Counter {counter}</button>
}