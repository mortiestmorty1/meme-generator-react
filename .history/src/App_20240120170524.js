
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
  const [isShown, setIsShown] = useState(true);
  const [display, setDisplay] = useState("here is our paragraph");
  const [button, setButton] = useState("hide paragraph")
function toggle(){
  setIsShown(!isShown)
  setDisplay(isShown ? "here is our paragraph" : "")
  setButton(isShown ? "hide paragraph" : "show paragraph")
}

  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={toggle}>{button}</button>
      <p>{display}</p>
    </div>
  );
}

export default App;
