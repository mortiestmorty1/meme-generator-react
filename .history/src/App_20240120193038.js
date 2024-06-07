
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
 const [fistname , setFistname] = useState("")
 function handleChange(event){
  setFistname(event.target.value)
 }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <input type="text" placeholder='first name' onChange={handleChange}> </input>
    </div>
  );
}

export default App;
