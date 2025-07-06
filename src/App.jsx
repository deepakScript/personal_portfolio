
import './App.css'
import { NavbarDefault } from './components/Navbar/Navbar'
import SplashCursor from './components/SplashCursor/SplashCursor'
import Home from './Pages/Home/Home'

function App() {


  return (
    <>
      <div>
        <SplashCursor />
        <div>
          <NavbarDefault />
          <div>
            <Home />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
