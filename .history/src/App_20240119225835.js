
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";

function App() {
    const [Allboxes , setAllboxes] = useState(boxes)
    function displayboxes(Allboxes){
        setAllboxes (Allboxes.map(box => <div className="box" style={{backgroundColor:box.color}}></div>))
    }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {displayboxes(Allboxes)}
    </div>
  );
}

export default App;
