import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [inputMessage, setInputMessage] = useState("")
  const [socket, setSocket] = useState<null | WebSocket>()
  const [lastWebSocketMessage, setLastWebSocketMessage] = useState("")

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:3000')
    websocket.onopen = () => {
      console.log('connected')
      setSocket(websocket)
    }

    websocket.onmessage = (message) => {
      console.log('received message: ', message.data)
      setLastWebSocketMessage(message.data)
    }
  }, [])

  if (!socket) {
    return <div>
      Loading ...
    </div>
  }

  return (
    <div>
      <input type="text" onChange={(e) => {
        setInputMessage(e.target.value)
      }} />
      <button onClick={(e) => {
        socket.send(inputMessage)
      }}>Send Message</button>

      {lastWebSocketMessage}
    </div>
  )
}

export default App
