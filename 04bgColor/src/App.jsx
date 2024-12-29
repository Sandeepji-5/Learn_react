import { useState } from 'react'
import './App.css'
function App() {
  const   [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}> 
      <div
      className=
      "fixed  flex  flex-wrap justify-center gap-3  bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center shadow-lg bg-white px-3 py-2  rounded-3xl ">
          <button  
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 mr-3 rounded-full   font-medium  border-2 border-black' 
          style={{backgroundColor:'red'}}>
            Red
          </button>

          <button
           onClick={()=>setColor("Yellow")}
           className="outline-none px-4 py-1  mr-3 rounded-full  font-medium border-2 border-black"

           style={{backgroundColor:'yellow'}}>
            Yellow
          </button>

          <button
           onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 mr-3 rounded-full  font-medium  text-white border-2 border-black' 
          style={{backgroundColor:'Blue'}}>
            Blue
          </button>

          <button 
           onClick={()=>setColor("brown")} 
          className='outline-none px-4 py-1  mr-3 rounded-full  font-medium border-2 border-black' 
          style={{backgroundColor:'brown'}}>
            Brown
          </button>

          <button 
           onClick={()=>setColor("orange")}
          className='outline-none px-4 py-1  mr-3 rounded-full font-medium  border-2 border-black' 
          style={{backgroundColor:'orange'}}>
            Orange
          </button>

          <button 
           onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1  mr-3 rounded-full  font-medium border-2 border-black' 
          style={{backgroundColor:'Pink'}}>
            Pink
          </button>

          <button 
           onClick={()=>setColor("Purple")}
          className='outline-none px-4 py-1  mr-3 rounded-full  font-medium   border-2 border-black'  
          style={{backgroundColor:'purple'}}>
            Purple
          </button>

          <button 
           onClick={()=>setColor("black")}
          className='outline-none px-4 py-1  mr-3 rounded-full text-white font-medium  border-2'  
          style={{backgroundColor:'black'}}>
            Black
          </button>


           </div>
      </div>
    </div>
     
  )
}

export default App
