
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
  const [isShown, setIsShown] = useState(false);
  const [display, setDisplay] = useState("");
function toggle(){
  setIsShown(!isShown)
  setDisplay(isShown ? "here is our paragraph" : "")
}

  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={toggle}>press me</button>
      <p>{display}</p>
    </div>
  );
}

export default App;
