
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
    const [Allboxes , setAllboxes] = useState(boxes)
    const styles ={
      backgroundColor: props.darkMode ===false ? "black" : "white",
  }
    
    
         const boxElements = Allboxes.map(box => 
         <Box  key={box.id} on={box.on}/>)
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {boxElements}
    </div>
  );
}

export default App;
