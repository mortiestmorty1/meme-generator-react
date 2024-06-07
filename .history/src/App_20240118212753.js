import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
function App() {
  const thingsarray= ["thing1", "thing2", "thing3"]
  function generateP(){
    thingsarray.map((thing) => {
      return <p>{thing}</p>
    })
  }
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      {generateP()}
    </div>
  );
}

export default App;
