import { useEffect, useState } from "react";
import axios from 'axios';

//component takes todo ID and renders only same todo
export function UseEffectVariation4() {

    const [selectedId, setSelectedId] = useState(1);

    return (
        <div>
            <button onClick={() => setSelectedId(1)}>1</button>
            <button onClick={() => setSelectedId(2)}>2</button>
            <button onClick={() => setSelectedId(3)}>3</button>
            <button onClick={() => setSelectedId(4)}>4</button>
            <button onClick={() => setSelectedId(5)}>5</button>
            <UseEffect id={selectedId} />
        </div>
    )
}


function UseEffect({ id }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        //axios.get('https://sum-server.100xdevs.com/todo?id=' + id)
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then((res) => {
                console.log(res.data.todo);
                setTodos(res.data.todo);
            })
    }, [id]);           // id is added as dependency[so when id changed, useeffect called again]

    return (
        <div>
            <h5>{todos.title}</h5>
            <h5>{todos.description}</h5>
        </div>
    )
}