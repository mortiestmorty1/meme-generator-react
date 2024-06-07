
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
function App() {
  const [contacts,setContacts]= useState({
    fName:"shoaib",
    lName:"ahmed",
    email:"192763@hjasgd.com",
    num:"1234567"
  })
  const contactsElement = contacts.map(contacts => <h1>  contact={contacts}</h1>)
   
  return (
    <div className="App">
      <Navbar />
      <Inputs />
    <div>{contactsElement}</div> 
    </div>
  );
}

export default App;
