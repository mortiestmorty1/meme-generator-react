
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";
import { useEffect } from "react";

function App(props) {
  
  const [starWars , setstarWars] = useState({})
  const [count , setCount] = useState(0)
  useEffect(() => {
    console.log("yes")
  }, [count])
  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
    .then(response => response.json())
    .then(data => setstarWars(data))
  }, [])
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <h1>{count}</h1>
      <button onClick={()=> setCount(prevCount => prevCount+1)} >add</button>
      <pre>{JSON.stringify(starWars,null,2)}</pre>
    </div>
  );
}

export default App;
