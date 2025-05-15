import React from 'react'
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <div>
    <nav className="bg-indigo-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300 font-bold font-poppins text-lg">
            <a href='/login'>Login</a>
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-md transition duration-300 font-bold font-poppins text-lg">
            <a href='/register'>Sign Up</a>
          </button>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="Logo"  className="h-12 w-auto"/>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar