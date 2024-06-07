
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from "react";

function App(props) {
  const [show , setShow] = React.useState(false)
  function handleClick() {
    setShow(prevshow => !prevshow)
    
  }
  return (
    <div className="App">
      <Navbar />

     <button onClick={handleClick}>show input components</button>
     {show && <Inputs />}
    </div>
  );
}

export default App;
