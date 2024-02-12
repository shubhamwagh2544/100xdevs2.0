import axios from "axios"
import { useState } from "react"

export function Todo() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState<string[]>([])

    const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val: string = e.target.value
        setTodo(val)
    }

    const addTodo = async () => {
        // render
        if (todo.trim() !== "") {
            setTodos([...todos, todo])
            setTodo("")
        }

        //send to server
        const res = await axios.post('http://localhost:3000/', { todo })
        console.log(res.data)
    }

    return (
        <>
            <div className="flex flex-col h-[60px] w-[100%] items-center justify-center gap-2 mt-5">
                <div className="flex flex-row gap-5 p-5 border-2 border-gray-300 rounded-md justify-center items-center mt-10">
                    <div>
                        <input
                            className="w-[400px] p-[5px] border-2 border-gray-300 rounded-md"
                            type="text"
                            placeholder="add your todo here"
                            name="todo"
                            value={todo}
                            onChange={handleState}
                        />
                    </div>
                    <div>
                        <button
                            className="bg-gray-300 rounded-md p-[5px]"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 mt-10 justify-center items-center">
                {todos.map((item: string, index: number) => (
                    <div
                        className="border-2 border-gray-300 p-3 rounded-md m-1 w-[35%] text-center text-white text-lg"
                        key={index}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </>

    )
}