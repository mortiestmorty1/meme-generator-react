
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [boool, selBoool] = useState(false);
  function Change(){
    selBoool(true);
  }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <h1>1{boool}</h1>
    </div>
  );
}

export default App;
