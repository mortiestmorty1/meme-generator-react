
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const out =false
  let answer= out===true ? "yes" : "no"
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <h1>{answer}</h1>
    </div>
  );
}

export default App;
