import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
function App() {
  const thingsarray= ["thing1", "thing2", "thing3"]
  const thingsElement = thingsarray.map(thing => <p key ={thing}>{thing}</p>)
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {thingsElement}
    </div>
  );
}

export default App;
