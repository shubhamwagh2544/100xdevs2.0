import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'hey',
      description: 'hey there'
    },
    {
      id: 2,
      title: 'hey 2',
      description: 'hey there 2'
    },
    {
      id: 3,
      title: 'hey 3',
      description: 'hey there 3'
    }
  ]);

  function addTodo() {
    setTodos([...todos, {
      id: 4,
      title: 'hey 4',
      description: 'hey there 4'
    }])
  }

  return (
    <>
      <button onClick={addTodo}>add todo</button>
      {todos.map((todo) => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App
