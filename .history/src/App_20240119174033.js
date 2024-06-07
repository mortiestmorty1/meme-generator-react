
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const out =false
   
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <h1>{out===true ? "yes" : "no"}</h1>
    </div>
  );
}

export default App;
