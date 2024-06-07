
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [item , setitem] = useState(["itme1" , "item2" , "item3"])
   function handleClick () {
    setitem([...item , "newitem" + item.length()])
    
   }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={handleClick}>ADD item</button>

    </div>
  );
}

export default App;
