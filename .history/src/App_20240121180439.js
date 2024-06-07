
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";
import { useEffect } from "react";

function App(props) {
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
