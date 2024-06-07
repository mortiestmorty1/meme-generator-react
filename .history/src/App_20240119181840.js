
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
  const contactsElement = contacts.map(contacts => <div> key={contacts} contact={contacts}</div>)
   
  return (
    <div className="App">
      <Navbar />
      <Inputs />
    {contactsElement}
    </div>
  );
}

export default App;
