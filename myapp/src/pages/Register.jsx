import React from 'react'
import '../assets/style/register.css'
function register() {
  return (
    <div className='regis'>
        <h1 id='title'>Register Page</h1>
        <input type="text" placeholder="Username" id='tx_box' />
        <input type="text" placeholder="Full name" id='tx_box' />
        <input type="text" placeholder="Phone number " id='tx_box' />
        <input type="text" placeholder="Email" id='tx_box' />

        <input type="password" placeholder="Password" id="tx_box" />
        <button>Register</button>
    </div>
  )
}

export default register