import { useCallback, useState } from 'react'
// import { Header } from './components/Header'
import Header from './components/Header'
import './App.css'



function App() {
  const[count,setCount]=useState(0)

  // const newfn=()=>{}   //its rerendering
  const newfn = useCallback(()=>{},[]) //its solve re rendering - by cache method
  // const newfn = useCallback((count)=>{},[count]) //again its create re rendering - dependency changes 

  return (
    <>
      <Header newfn={newfn}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>click here</button>
    </>
  )
}

export default App
