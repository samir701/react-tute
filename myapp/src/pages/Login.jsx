import React from 'react'
import '../assets/style/login.css'

function Login() {
  return (
    <div className='login'>
        <h1 id='title'>Login Page</h1>
        <input type="text" placeholder="Username" id='tx_box' />
        <input type="password" placeholder="Password" id="tx_box" />
        <button >Login</button>
        
    </div>
  )
}

export default Login