import { useState } from 'react'
import { useReducer } from 'react'
import './App.css'

function App() {

  const initialState ={count:0}

  const reducer=(state,action)=>{
    switch(action.type){
      case 'increase': {
        return {count:state.count +1}
      }
      case 'decrease':{
        return {count:state.count -1}
      }
      case 'input':{
        return {count:action.payload}
      }
      default:{
        return state
      }
    }
     

  }



  const [state,dispatch]=useReducer(reducer,initialState)

  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
      <button onClick={()=>dispatch({type:'decrease'})}>Decrease</button>


      <input value={state.count}onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})} 
      
      type='number'></input>
    </>
  )
}

export default App
