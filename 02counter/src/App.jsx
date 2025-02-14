import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter, setCounter] = useState(1);
  let [rounds, curRounds]= useState(1);
  //let   counter = 15;
  const addValue = ()=>{



  if(counter ===108){
    setCounter(0);
    curRounds(rounds+1);
    if(rounds === 16){
      curRounds(0);
      alert(" ❤️ Thankyou so much for completing Your Daily minimum 16 rounds -  Srila Prabhupad ")
    }
  }
  else{
      setCounter(counter+1);
    }

  

}

const removeValue = ()=>{
  counter = (counter==0)?counter: counter-1;
  setCounter(counter);


}
  return (
    <>
     <div class= 'jai'> 
     <h2 >"HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE </h2>
    <h2>   HARE RAMA HARE RAMA RAMA RAMA HARE HARE !!" </h2>
 </div>
    
     
      <h1>Counter value : {counter}</h1>


      <button onClick={addValue} >Add Value</button>
      <br/><br/>
      <button onClick={removeValue}> Reduce Value</button>
      <p> <strong>Your Rounds :{rounds}</strong></p>
      
    </>
  )
}

export default App
