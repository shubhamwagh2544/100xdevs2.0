import { useEffect, useState } from "react";

export function UseEffect2() {
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

    return (
        <div>
            {todos.map(({ id, title, description }) => <Todo key={id} id={id} title={title} description={description} />)}
        </div>
    )
}

function Todo({ id, title, description }) {
    return (
        <div style={{
            border: "2px solid black",
            padding: 10,
            margin: 10
        }}>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{description}</h5>
        </div>
    )
}