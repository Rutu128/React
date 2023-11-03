import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Card from './components/Card'

function App() {
  return (
    <>
     <h1 className='bg-green-400 mb-4 text-black p-4 rounded-xl'>Tailwind CSS</h1>
     <Card Username="RutuBhimani"/>
     <Cards Username="Hetvi"/>
    </>
  )
}

export default App
