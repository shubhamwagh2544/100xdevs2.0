import { RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState, useRecoilValueLoadable } from 'recoil'
import { todosAtomFamily } from './store/atoms/atoms'
import { useEffect } from 'react'

function App() {
  return (
    <RecoilRoot>
      <UpdaterComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  )
}

function Todo({ id }) {
  // todo needs to be fetched via an atom
  // const currentTodo = useRecoilValue(todosAtomFamily(id))
  // const [currentTodo, setTodos] = useRecoilState(todosAtomFamily(id))

  // useRecoilValueLoadable or useRecoilStateLoadable : renders loading message for users if backend doenst fetch data fast
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id))
  // currentTodo is object with state and content props
  console.log(currentTodo.state + " --- " + currentTodo.contents)

  if (currentTodo.state === 'loading') {        // if backend taking time to fetch data
    return <div>
      loading...
    </div>
  }
  else if (currentTodo.state === 'hasValue') {  // if all goes well
    return (
      <>
        <p>{currentTodo.title}</p>
        <p>{currentTodo.description}</p>
        <br />
      </>
    )
  }
  else if (currentTodo.state === 'hasError') {  // if backend url is incorrect => error
    return <div>
      error while rendering components....
    </div>
  }
}

function UpdaterComponent() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2))

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 2,
        title: 'todo 2 updated',
        description: 'todo 2 updated with useSetRecoilState'
      })
    }, 5000)
  }, [])
}

export default App