import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const date = new Date();
  const hours = date.getHours();
  let name = "shoaib";
  function greeting (name)
  {
    if (hours < 12)
    {
      return "Good Morning " + name;
    }
    else if (hours < 16)
    {
      return "Good Afternoon " + name;
    }
    else if (hours < 20)
    {
      return "Good Evening " + name;
    }
    else
    {
      return "Good Night " + name;
  }

  }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      
    </div>
  );
}

export default App;
