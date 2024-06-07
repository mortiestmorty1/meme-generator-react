
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
  const [starWars , setstarWars] = useState({})

  fetch("https://swapi.dev/api/people/1")
  .then(response => response.json())
  .then(data => setstarWars(data))
}
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <p>{json.stringify(starWars,null,2)}</p>
    </div>
  );
}

export default App;
