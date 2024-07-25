import { useState } from 'react'
import 'bulma/css/bulma.min.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { AboutFast } from './components/AboutFast'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <NavBar />
        <Header />
        <AboutFast />
      </div>
    </>
  )
}

export default App
