import { Suspense } from "react";
import { UpdaterComponent } from "../../App";

export function SuspenseFallback() {
    return (
        <Suspense fallback={"loading..."}>
            <UpdaterComponent />
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={3} />
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={3} />
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={3} />
        </Suspense>
    )
}

function Todo({ id }) {
    return (
        <>
            <p>{currentTodo.title}</p>
            <p>{currentTodo.description}</p>
            <br />
        </>
    )
}