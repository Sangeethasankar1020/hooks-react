import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use state - UI replicate

  // use state- single  
  // const [color,setColor]=useState('red') //initial value

  // const changeColor=()=>{
  //   setColor("Blue")
  //   console.log(setColor)


  // }

  // multiple usestate

  // not like that
  // const [brand,setBrand]=usestate("Ferrari")
  // const [model,setModel]=usestate("Roma")
  // const [year,setYear]=useState("2023")
  // const [color,setColor]=useState("red")

  // const [car,setCar]=useState({
  //     brand:"Ferrari",
  //     model:"Roma",
  //     year:2023,
  //     color:"red"

  // })

  // const changeColor=()=>{
  //   setCar((prev)=>{
  //     return {...prev,color:"blue"}
  //   })
  // }

  const [count,setCount]=useState(0)

  const increaseCount=()=>{
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
  }


  return (
    <>
    {/* single usestate */}
      {/* <h1>My Favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button> */}



      {/* multiple use state  */}
      {/* <h1>My {brand} </h1>
      <h2>It is a {color} {model} from {year} </h2> */}


      {/* <h1>My {car.brand} </h1>
      <h2>It is a {car.color} {car.model} from {car.year} </h2>
      <button onClick={changeColor}>Blue</button> */}


      {/* count */}

        <h1>Count : {count} </h1>
        <button onClick={increaseCount}>Increase by 4</button>
    </>
  )
}

export default App
