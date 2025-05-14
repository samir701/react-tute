import React , { useState } from 'react'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
function App() {
  let [a,setA]=useState(0);
  let [b,setB]=useState(0);
  let [c,setC]=useState('');//c=samir
  let [d,setD]=useState('');
  function change(event){
  
    setC(event.target.value);
  }
  function handleClick(){
    console.log(c);
    setD(c);
    document.getElementById("input").value="";
  }
  function add(){
    if(b==9){
      alert("Value cannot be greater that 9");

      return;
    }
    else{
      setB(++b);
      console.log(b);
    }
  }
  function sub(){
    if(b<=0){
      alert("Value cannot be negative");
      return;
    }
    else{
      setB(--b);
      console.log(b);
    }
    

  }
  function counter(){
    setA(++a);
    console.log(a);
  }
  
  return(
    <div id="app">
      <h1>Welcome to the App</h1>
      <p>This is a simple React application.</p>
      
      <button id="btn" onClick={counter}>counter:{a}</button>
      <div className="btn_counter">
        <button onClick={add}>+</button>
        <span id='ctn_text'>{b}</span>
        <button onClick={sub}>-</button>
      </div>
      <div className="str_disp">
      <input type="text" id="input" placeholder="Enter your name" onChange={()=>change(event)}/>
      <button id="btn" onClick={handleClick}>Submit</button>
      </div>
      <p id='txt'>.......the entered tex is:<b>{d}</b>.......</p>
      <div className='login_reg'>
        <Login />
        <Register />
      </div>
      
      
    </div>
  )
}


export default App
