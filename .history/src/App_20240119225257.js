
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import Boxes from "./components/boxes";
function App() {
    
  return (
    <div className="App">
      <Navbar />
      <Inputs />
    </div>
  );
}

export default App;
