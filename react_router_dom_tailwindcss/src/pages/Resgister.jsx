import React from 'react'
import '../assets/styles/register.css'

function Resgister({setname}) {
  return (
    <div className='bg-indigo-500 font-serif text-shadow-lg rounded-md border-2 register_div'>
        <h1>coming soon......😊😊</h1>
        <button className='btn' onClick={() => {
          if(localStorage.getItem("name") == "welcome samir"){
            setname("hi!! i am tanaya")
            localStorage.setItem("name","hi!! i am tanaya")
          }
          else{
            setname("welcome samir")
            localStorage.setItem("name","welcome samir")
          }
          
        } }>show me</button>
    </div>
  )
}

export default Resgister