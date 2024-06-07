import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Inputs />
    </div>
  );
}

export default App;
