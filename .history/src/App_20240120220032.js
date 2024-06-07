
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
}
  
function handleChange(event) {
  const {name , value , type , checked} = event.target
  setname(prevname => ({
    ...prevname,
    [name]: type === "checkbox" ? checked : value
  }));
}
function handleSubmit(event) {
  event.preventDefault()
  console.log(name)
}
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
     <form>
      <input
      type='email'
      name=''
      ></input>
      <input></input>
      <input></input>
      <input></input>
      <button>Sign up</button>
     </form>
    </div>
  );
}

export default App;
