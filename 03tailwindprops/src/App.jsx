import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-1'> HARE KRISHNA </h1>
      <Cards channel=" SANDEEP VIS."btnText="come please "/>
      <Cards username= " RadhaKrishna "btnText="visit me"/>
      <Cards username = "HariBol"/>  // lets pass nhi kiya btnText then  kya hoga ki function me jo default value  hai whi pass ho jayegi.


    </>
  )
}

export default App

