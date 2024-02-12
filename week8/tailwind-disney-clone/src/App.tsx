import './App.css'
import { GenreMoviesList } from './components/GenreMoviesList'
import { Header } from './components/Header'
import { ProductionHouse } from './components/ProductionHouse'
import { Slider } from './components/Slider'

function App() {

  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMoviesList />
    </div>
  )
}

export default App
