
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [item , setitem] = useState(["item1" , "item2" , "item3"])
   function handleClick () {
    setitem([...item , "newitem" + item.length+1])
    
   }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={handleClick}>ADD item</button>
      <h1>{item}</h1>

    </div>
  );
}

export default App;
