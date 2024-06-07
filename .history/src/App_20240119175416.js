
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [out ,setOut] = useState("true")
   function handleClick () {
    setOut(prevOut =>prevOut ? "false" : "true")
   }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={handleClick}>{out} heloo</button>

    </div>
  );
}

export default App;
