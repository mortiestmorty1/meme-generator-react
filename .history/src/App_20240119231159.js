
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";

function App() {
    const [Allboxes , setAllboxes] = useState(boxes)
    const styles ={
        backgroundColor: "black"
    }
         const boxElements = Allboxes.map(box => <div className='box' key={box.id} style={{styles}}></div>)
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {boxElements}
    </div>
  );
}

export default App;
