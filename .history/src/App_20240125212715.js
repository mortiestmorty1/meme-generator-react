
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import{Navigate} from "@reach/router"

function App(props) {
  const [show , setShow] = React.useState(false)
  function handleClick() {
    setShow(prevshow => !prevshow)
    show ? Navigate("/inputs") : Navigate("/")
  }
  return (
    <div className="App">
      <Navbar />

     <button onClick={handleClick}>show input components</button>
    </div>
  );
}

export default App;
