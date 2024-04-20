import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LogOut from './components/LogOut'
import SignUp from './components/SignUp'
import User from './components/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/user' element={<User />} />
        <Route path='/logout' element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
