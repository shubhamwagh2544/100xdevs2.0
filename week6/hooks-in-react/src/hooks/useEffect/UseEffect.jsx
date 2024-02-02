import { useEffect, useState } from "react";

export function UseEffect() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setInterval(() => {
            fetch('https://sum-server.100xdevs.com/todos')
                .then(async (data) => {
                    const response = await data.json();
                    setTodos(response.todos);
                })
        }, 10000)
    }, []);

    return todos.map((todo) => RenderTodo(todo))
}

function RenderTodo(todo) {
    return (
        <div style={{
            border: "2px solid black",
            padding: 10,
            margin: 10
        }}>
            <h5>{todo.id}</h5>
            <h5>{todo.title}</h5>
            <h5>{todo.description}</h5>
        </div>
    )
}