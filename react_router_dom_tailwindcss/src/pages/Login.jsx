import React from 'react'
import '../assets/styles/login.css'

function Login({name}) { //function ---->argument(❌)
  return (
    <div className=' font-serif text-shadow-lg rounded-md border-2 login_div'>
        <div className='login'>
        <h1 id='title'>Login Page:</h1>
        <div>{name}</div>
        <input type="text" placeholder="Username" id='tx_box' />
        <input type="password" placeholder="Password" id="tx_box" />
        <button id='btn'>Login</button>
        
    </div>
    </div>
  )
}


export default Login