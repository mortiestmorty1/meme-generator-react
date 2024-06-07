
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
 const [msg , setMsg] = useState(["hello","hi","bye","goodbye"])
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {msg.length>0 &&<h1> you have {msg.length} msgs </h1>}
    </div>
  );
}

export default App;
