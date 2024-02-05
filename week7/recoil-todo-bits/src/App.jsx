import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
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
  const currentTodo = useRecoilValue(todosAtomFamily(id))
  return (
    <>
      <p>{currentTodo.title}</p>
      <p>{currentTodo.description}</p>
      <br />
    </>
  )
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