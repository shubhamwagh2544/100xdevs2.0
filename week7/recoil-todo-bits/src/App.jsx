import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  )
}

function Todo({ id }) {
  // todo needs to be fetched via an atom
  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
