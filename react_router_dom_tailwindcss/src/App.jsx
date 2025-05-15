import React from 'react'
import './App.css'
import Login from './pages/Login'
import Resgister from './pages/Resgister'
import { Route,Routes } from 'react-router-dom';
import Navbar  from './pages/Navbar';

function App() {
  let [myname,setname]= React.useState(localStorage.getItem("name") || "welcome samir")
  return (
    <div className='bg-indigo-500 font-serif text-shadow-lg  border-2 main_div gap-2'>
      <Navbar />
      <div className='flex justify-center items-center m-5 wc_txt '>
        <h1>I love you my jan😘❤️ {myname}</h1>
        
      </div>
      
      
      
      <Routes>
        <Route path='/login' element={<Login name={myname} />}></Route>
        <Route path='/register' element={<Resgister setname={setname}/>}></Route>
        <Route path='/' element={<h1 className='text-3xl text-center'>Welcome to my website</h1>}></Route>
        
        
      </Routes>
    </div>
  )
}

export default App