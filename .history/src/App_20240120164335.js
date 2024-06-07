
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
  const [isShown, setIsShown] = useState(false);
  const [display, setDisplay] = useState("Show");
function toggle(){
 setIsShown(prevShown => isShown === false ? true && setDisplay("show") : false && setDisplay("hide"))
}

  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={toggle}>{display}</button>
    </div>
  );
}

export default App;
