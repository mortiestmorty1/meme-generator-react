
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [counter , setCounter] = useState(0);
  function Changeneg(){
    setCounter(prevCounter => prevCounter - 1)
  }
  function Changepos(){
    setCounter(prevCounter => prevCounter + 1)
  }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={Changeneg}>Change (-)</button>
      <h1>{counter}</h1>
      <button onClick={Changepos}>Change (+)</button>
    </div>
  );
}

export default App;
