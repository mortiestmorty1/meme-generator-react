import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
function App() {
  const thingsarray= ["thing1", "thing2", "thing3"]
  const thingsElement = thingsarray.map(thing => <p key ={thing}>{thing}</p>)
  const additem = () => {
    const newthing = "thing" + (thingsarray.length + 1)
    thingsarray.push(newthing)
    console.log(thingsarray)
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
