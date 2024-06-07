
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";

function App() {
    const [Allboxes , setAllboxes] = useState(boxes)
    function displayboxes(Allboxes){
      return(
         const boxElements = Allboxes.map(box => <div className='box' key={box.id}}></div>)
      )
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
