// good way
function App() {
  return (
    <>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>

      <CardWrapper>
        hey there
      </CardWrapper>

      <CardWrapper>
        <CardWrapper>
          <TextComponent />
        </CardWrapper>
      </CardWrapper>
    </>
  )
}

function CardWrapper({ children }) {
  return (
    <div style={{
      border: "2px solid red",
      padding: 20,
      margin: 20
    }}>
      {children}
    </div>
  )
}

function TextComponent() {
  return <div>
    hey
  </div>
}

export default App;