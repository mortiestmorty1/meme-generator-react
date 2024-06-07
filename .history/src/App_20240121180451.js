
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
    </div>
  );
}

export default App;
