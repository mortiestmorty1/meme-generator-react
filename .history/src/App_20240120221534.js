
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
  if(name.newsletter === true)
  return alert("you have subscribed to our newsletter")
}
}
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
    </div>
  );
}

export default App;
