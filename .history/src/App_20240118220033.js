import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [things ,setThing]= useState(["thing1", "thing2", "thing3"])
  const thingsElement = things.map(thing => <p key ={thing}>{thing}</p>)
  const additem = () => {
    const newthing = "thing" + (things.length + 1)
    setThing(prevState => [newthing,...prevState])
  }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <button onClick={additem}>add item</button>
      {thingsElement}
    </div>
  );
}

export default App;