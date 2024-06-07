
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
    const [Allboxes , setAllboxes] = useState(boxes) 
    function Toggle(id){
      setsAllboxes(prevboxes =>{
        const newboxes = prevboxes.map(box => {
          if (box.id === id) {
            return {
              ...box,
              on: box.on ? false : true
            };
          }
          return box;
        });
      })
    }
         const boxElements = Allboxes.map(box => 
         <Box  id={box.id} key={box.id} on={box.on} toggle={Toggle}/>)
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {boxElements}
    </div>
  );
}

export default App;
