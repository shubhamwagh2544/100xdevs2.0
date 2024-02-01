import { useState } from 'react'

let counter = 3;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'hey',
    description: 'hey there'
  }, {
    id: 2,
    title: 'hey 2',
    description: 'hey there 2'
  }, {
    id: 3,
    title: 'hey 3',
    description: 'hey there 3'
  }]);

  function addTodo() {
    setTodos([...todos, {
      id: ++counter,
      title: `hey ${counter}`,
      description: `hey there ${counter}`
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
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
