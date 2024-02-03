import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './components/DashboardPage';
import { LandingPage } from './components/LandingPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
