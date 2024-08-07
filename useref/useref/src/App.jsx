import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  // const [value,setValue]=useState(0)
  // // const [count,setCount]=useState(0)

  // const count=useRef(0)
  // // console.log(count)

  // // without dependency useeffect use - its render any state changes
  // // useref hook - does not rerender when value changed

  // // useEffect(()=>{
  // //   setCount(prev=>prev+1)
  // // })
  // useEffect(()=>{
  //   count.current=count.current+1
  // })

  const inputElem=useRef()


  const btnclick=()=>{
    console.log(inputElem.current)
    inputElem.current.style.background="blue"
  }
  return (
    <>
      {/* <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
      <h1>Render Count:{count.current}</h1> */}


      {/* accessing dom elements */}

      <input type='text' ref={inputElem}></input>
      <button onClick={btnclick}>Click here</button>
    </>
  )
}

export default App
