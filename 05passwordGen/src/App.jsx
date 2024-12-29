import { useState, useCallback, useEffect, useRef } from 'react';

import './App.css'

function App() {
const [length , setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false) // either take or not the number
const [charAllowed, setCharAllowed] = useState(false) // either take char or not
const [password, setPassword] = useState("");
const passwordRef = useRef(null);
const passwordGenerator = useCallback(()=>{
let pass = ""
let str = "ABCDEFGHIJKLMNOPQRSTIUVWXYZabcdefghijklmnpqrstuvwxyz"
if(numberAllowed) str  += "0123456789"
if(charAllowed)  str   += "!@#$%^&*-_+=[]{}~`"
for(let i =1; i<length;i++){
  let char  = Math.floor(Math.random()*str.length +1)
  pass += str.charAt(char);
}
setPassword(pass);
}, 

[length, numberAllowed, charAllowed ])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'> 
         <h1 className='text-white text-center my-3'>Password Generator</h1>

        {/* first line  */}
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
              <input
                type="text"
                value={password} 
                className='outline-none w-full py-1 px-3 '
                placeholder='password'
                readOnly
                ref={passwordRef}
              />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>
        </div>


        {/* second line  */}
        <div className='flex text-sm gap-x-2 '>

              {/* for range slider  */}
              <div className=' flex items-center gap-x-1'>
              <input 
              type='range' 
              min ={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>{ setLength(e.target.value)}}
              />
              <label>Length: [{length}]</label>
              </div>


              {/* for Number  */}
              <div className=' flex items-center gap-x-1'>
              <input 
              type='checkbox' 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() =>setNumberAllowed((prev)=>!prev)}
              />
              <label>Numbers</label>
              </div>
              
              <div className=' flex items-center gap-x-1'>
              <input 
              type='checkbox' 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() =>setCharAllowed((prev)=>!prev)}  // here prev will be changed 
              />
              <label>Characters</label>
              </div>
        </div>
    </div>
    )
    }
export default App
