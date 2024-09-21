import {useEffect} from 'react'
import './App.css'
import {io} from "socket.io-client";

function App() {

    useEffect(() => {
    const socket = io('ws://localhost:3000');
    socket.on('connect', () => {
      console.log('client connected to server');
      socket.emit('message', 'Hello from client');
    });

    return () => {
      socket.disconnect();
    }
    }, []);

  return (
    <>
      Hello WebSocket
    </>
  )
}

export default App
