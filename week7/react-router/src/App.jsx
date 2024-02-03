import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { DashboardPage } from './components/DashboardPage';
import { LandingPage } from './components/LandingPage';
import { FixedNavbar } from './components/FixedNavbar';

function App() {

  return (
    <div>
      <FixedNavbar />

      <BrowserRouter>
        <NavigationComponent />   {/* this causes no more reloads: this is client side routing by react */}
        <Routes>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function NavigationComponent() {

  const navigate = useNavigate();

  return (
    < div >
      {/* changing routes, renders whole app in network each time [how to tackle] : useNavigate hook from react-router-dom */}
      <button onClick={() => {
        //window.location.href = '/'
        navigate('/')
      }}>Landing Page</button>

      <button onClick={() => {
        //window.location.href = '/dashboard'
        navigate('/dashboard')
      }}>DashBoard Page</button>
      {/* but useNavigate hook demands to be used in context of BrowserRouter component of react-router-dom */}
    </div >
  )
}

export default App
