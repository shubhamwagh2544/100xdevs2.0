"use client"

export default function () {

    function handler() {
        console.log("button clicked")
    }

    return (
        <button onClick={handler}>Click</button>
    )
}