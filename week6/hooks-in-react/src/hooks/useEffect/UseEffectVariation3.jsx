import { useEffect, useState } from "react";
import axios from 'axios';

//component takes todo ID and renders only same todo
export function UseEffectVariation3({ id }) {
    const [todos, setTodos] = useState([]);

    /*useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todos')
            .then(function (res) {
                const todo = res.data.todos.filter((todo) => todo.id === id)
                console.log(todo);
                setTodos(todo);
            })
    }, []);*/

    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todo?id=' + id)
            .then((res) => {
                console.log(res.data.todo);
                setTodos(res.data.todo);
            })
    }, []);

    return (
        <div>
            <h5>{todos.title}</h5>
            <h5>{todos.description}</h5>
        </div>
    )
}