
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
 const [name , setname] = useState({
 email:"",
  password:"",
  confirm:"",
  newsletter:false
  })
  
function handleChange(event) {
  const {name , value , type , checked} = event.target
  setname(prevname => ({
    ...prevname,
    [name]: type === "checkbox" ? checked : value
  }));
}
function handleSubmit(event) {
  event.preventDefault()
  if(name.password !== name.confirm)
  return alert("passwords must match")
else{
  console.log("success")
}
}
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
     <form onSubmit={handleSubmit}>
      <input
       type="email" 
       placeholder="email" 
       onChange={handleChange}
        name="email"
        value={name.email}
      ></input>
      <input
      type="password" 
      placeholder="password" 
      onChange={handleChange}
       name="password"
       value={name.password}></input>
      <input
      type="password" 
      placeholder="confirm password" 
      onChange={handleChange}
       name="confirm"
       value={name.confirm}></input>
      <input
       type="checkbox"
       id='newsletter'
       checked={name.newsletter}
       onChange={handleChange}
       name="newsletter">
       </input>
       <label htmlFor='newsletter'>Newsletter</label>
      <button>Sign up</button>
     </form>
    </div>
  );
}

export default App;
