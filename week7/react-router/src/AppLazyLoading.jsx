import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { lazy } from "react";   // normal export (export App)
import { Suspense } from "react";
// import DashboardPage from "./components/lazy-loading/DashboardPage"; // default export (export default App)


const LandingPage = lazy(() => import('./components/lazy-loading/LandingPage'))         // lazy loading syntax for default export
const DashboardPage = lazy(() => import('./components/lazy-loading/DashboardPage'))     // lazy loading syntax for default export


function AppLazyLoading() {

    return (
        <BrowserRouter>
            <NavigationComponent />
            <Routes>
                <Route path="/" element={<Suspense fallback={"loading..."}>< LandingPage /></Suspense>} />  {/* no need to use Suspense */}
                <Route path="/dashboard" element={<Suspense fallback={"loading..."}><DashboardPage /></Suspense>} /> {/* we can render directly */}
            </Routes>
        </BrowserRouter>
    )

}

function NavigationComponent() {
    const navigate = useNavigate();
    return (
        < div >
            <button onClick={() => {
                navigate('/')
            }}>Landing Page</button>

            <button onClick={() => {
                navigate('/dashboard')
            }}>DashBoard Page</button>
        </div >
    )
}

export default AppLazyLoading;