
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Inputs from "./components/inputs";
import { useState } from 'react';
import boxes from "./components/boxes";
import Box from "./components/box";

function App(props) {
 const [name , setname] = useState({
  firstname : "",
  lastname : "",
  email: "",
  comments: "",
  isfreind: true
})
  
function handleChange(event) {
  const {name , value , type , checked} = event.target
  setname(prevname => ({
    ...prevname,
    [name]: type === "checkbox" ? checked : value
  }));
}
 
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <form>
        <input 
         type="text" 
         placeholder="first name" 
         onChange={handleChange}
          name="firstname"
          value={name.firstname}> 
        </input>
      <input 
      type="text" 
      placeholder="last name" 
      onChange={handleChange}
      name="lastname"
      value={name.lastname}> 
      </input>
      <input 
      type="email" 
      placeholder="email" 
      onChange={handleChange}
      name="email"
      value={name.email}> 
      </input>
      <textarea 
      value={name.comments}
      type="text" 
      placeholder="comments" 
      onChange={handleChange}
      name="comments">
      </textarea>
      <input 
      type="checkbox"
       id='isfreind'
       checked={name.isfreind}
       onChange={handleChange}
       name="isfreind">
      </input>
      <label htmlFor="isfreind">is freind</label>
      <br>
      <input
      type="radio"
      id='unemployed'
      />
      <label htmlFor="unemployed">unemployed</label>
      <input
      type="radio"
      id='employed'
      />
      <label htmlFor="employed">employed</label>
       
      <h1>{name.firstname}</h1>
      <h1>{name.lastname}</h1>
      <h1>{name.email}</h1>
      <h1>{name.comments}</h1>
      <h1>{name.isfreind}</h1>
      </form>
    </div>
  );
}

export default App;
