
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [contact,setContacts]= useState({
    fName:"",
    lName:"",
    email:"",
    num:""
  })
   function handleClick () {
    setitem(prevItem =>[...prevItem , "item"+(prevItem.length+1)])
    
   }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={handleClick}>ADD item</button>
      <ul>
        {item.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
