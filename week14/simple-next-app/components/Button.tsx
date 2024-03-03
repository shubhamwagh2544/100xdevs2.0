"use client"

export default function () {

    function handler() {
        console.log("button clicked")
    }

    return (
        <button onClick={handler} className="bg-red-500">Click</button>
    )
}