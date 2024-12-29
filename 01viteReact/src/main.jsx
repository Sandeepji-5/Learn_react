import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'; // This import is necessary for JSX to work


// just for my knowledge => Here we have seen that the App is a simply javascript function but here 
// used as a jsx , now we will check that is it working the same thing in main function

            // 1st
// function MyApp(){
//     return (
//         <div>
//             <h1>We are chcking how the function work in the main !!!</h1>
//             <h3>Yes , its clearly working but  we have to write the code in that formate </h3>
//             <h3>so that it will match to that all user who writes in  industry</h3>

//         </div>
//     )
// }

            // 2nd
    // we have to see in custom function if we created some object  and in  jSX formate in  customreact.js 
    // so we can  check by creating in the main function and as the App function is renderinng as jsx it wil also render it
    // because we understnad that the react only understand in this formate ->

// const reactElement ={
//     type: 'a', 
//     props: {
//             href: 'https://google.com', 
//             target: '_blank' 
//            },
  
//             children: 'Click me to visit google'
//     }


        //4th
// const anotherElement = (
//     <a href ="https://google.com" target='_blank' > Visit To Google </a>

// )

            // 5th
const  anotherUser = "hello friends "
const reactElement = React.createElement(
    'a',

    { href:'https://google.com' , target: '_blank'},

    'click to  ghoomne ke liye google ke pas',
     anotherUser  // here after doing all thing  u can insert the variable.
)



createRoot(document.getElementById('root')).render(
            // 1st
    // MyApp()  // its simple a javascript bro

           // 2nd 
    // <>
      <App/>
    //  <h1> And Thaks to babel who convert my  JSX code in  js so that browser can understand well</h1>
    // </>

         // 3rd 
         // reactElement // we can see its not working 


        // 4th 
        // anotherElement

        //5th
        // reactElement
)
