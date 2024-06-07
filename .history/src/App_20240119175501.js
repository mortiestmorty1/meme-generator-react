
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [out ,setOut] = useState(false)
   function handleClick () {
    setOut(prevOut =>prevOut ? false : true)
    
   }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={handleClick}>{out===true ? "yes" : "no"}</button>

    </div>
  );
}

export default App;
