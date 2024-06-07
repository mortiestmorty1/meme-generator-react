
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

}
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
    </div>
  );
}

export default App;
