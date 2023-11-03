import { useState } from 'react'//hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Hooks
function App() {
  let [counter, setCounter] = useState(15)
  const Addvalue = () => {
    console.log("clicked")
    // counter++;
    if (counter < 20)
      setCounter(counter + 1)
    else
      setCounter(15)
    // counter = 20
  }
  const Removevalue = () => {
    if (counter > 0)
      setCounter(counter - 1)
    else
      setCounter(15)
  }
  // let counter = 5
  return (
    <>
      <h1>Rutu Bhimani</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={Addvalue}>Add Value</button>
      <br />
      <br />
      <button
        onClick={Removevalue}>remove value</button>
    </>
  )
}

export default App
