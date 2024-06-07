
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
 const [name , setname] = useState({
  firstname : "",
  lastname : ""
})
  
 function handleChange(event){
  setname.firstname(event.target.value)
  setname.lastname(event.target.value)
  
 }
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <form>
      <input 
      type="text" 
      placeholder="first name" 
      onChange={handleChange}
      name="first"> 
      </input>
      <input 
      type="text" 
      placeholder="last name" 
      onChange={handleChange}
      name="last"> 
      </input>
      <h1>{name.firstname}</h1>
      <h1>{name.lastname}</h1>
      </form>
    </div>
  );
}

export default App;
