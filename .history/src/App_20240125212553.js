
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";


function App(props) {
  const [show , setShow] = React.useState(false)
  function handleClick() {
    setShow(prevshow => !prevshow)
  }
  return (
    <div className="App">
      <Navbar />

     <button onClick={handleClick}>show input components</button>
    </div>
  );
}

export default App;
