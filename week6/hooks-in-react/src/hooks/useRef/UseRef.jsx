// useRef: lets you override react state manually by changing DOM elements

import { useEffect, useRef, useState } from "react";

export function UseRef() {

    const [incomeTax, setIncomeTax] = useState(20000);
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = 10   // this is same as [document.getElementById('divref').innerHTML = newValue]
        }, 5000)
    }, [])

    return (
        <div>
            Your income tax is <div ref={divRef}>{incomeTax}</div>
        </div>
    )
}