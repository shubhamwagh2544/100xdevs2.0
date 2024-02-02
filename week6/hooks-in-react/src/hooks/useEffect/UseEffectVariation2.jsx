import { useEffect, useState } from "react";
import axios from 'axios';

// fetch todos and render it : see what happens if dependency array is changed with todos
export function UseEffectVariation2() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todos')
            .then(function (res) {
                console.log(res.data.todos);
                setTodos(res.data.todos)
            })
    }, []);

    return (
        <>
            {todos.map(({ title, description }) => <Todo title={title} description={description} />)}
        </>
    )
}

function Todo({ title, description }) {
    return (
        <div>
            <h5>{title}</h5>
            <h5>{description}</h5>
        </div>
    )
}