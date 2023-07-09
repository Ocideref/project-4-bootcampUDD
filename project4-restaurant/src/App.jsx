import './App.css'
import { NavBar } from './components/NavBar'
import { MainRoutes } from './routes/MainRoutes'
import { Footer } from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <>
      <NavBar />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App
