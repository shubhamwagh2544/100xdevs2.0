import './App.css'

function App() {

  return (
    <>
      <Todo title='go to gym 1' description='go to gym regularly 1' done={false} />
      <Todo title='go to gym 2' description='go to gym regularly 2' done={false} />
      <Todo title='go to gym 3' description='go to gym regularly 3' done={false} />
    </>
  )
}

interface TodoProps {
  title: string,
  description: string,
  done: boolean
}

function Todo(props: TodoProps) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
    </div>
  )
}

export default App
