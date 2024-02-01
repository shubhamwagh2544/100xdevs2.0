import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const response = await res.json();
        setTodos(response.todos);
      })
  }, [])

  return (
    <div>
      <CreateTodo />
      <Todo todos={todos} />
    </div>
  )
}

export default App