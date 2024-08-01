import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile></Profile>
      <Footer></Footer>
    </>
  )
}

export default App
