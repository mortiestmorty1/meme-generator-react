import React from "react";
import "../App.css";
import Meme from "./meme.js";
import { useState } from "react";
function Inputs(){
    const [Allmemeimage , setAllmemeimage] = useState(Meme)
    const [newmeme , setNewmeme] = useState({
        topText:"",
        bottomText:"",
        memeimage:"https://png.pngtree.com/png-vector/20231222/ourlarge/pngtree-do-not-press-this-button-sign-vector-png-image_11376553.png"
    })
    function handleClick () {

        const memearray = Allmemeimage
        const random = Math.floor(Math.random() * memearray.length)
        const url = memearray[random].url
        setNewmeme(prevmeme =>({
            ...prevmeme,
            memeimage:url
        }))
    }
    function handleChange(event) {
        const {name , value} = event.target
        setNewmeme(prevmeme => ({
            ...prevmeme,
            [name]: value
        }))
    }
    return(
        <div className="inputs-container">
            <div className="inputs">
                <label className="top">Top Text</label>
                <input  
                className="topinput" 
                type="text" 
                placeholder="input here"
                onChange={handleChange}
                 name="topText"
                 value={newmeme.topText} />
                <label className="bottom">bottom Text</label>
                <input 
                className="bottominput" 
                type="text" 
                placeholder="input here"
                onChange={handleClick}
                name="bottomText"
                value={newmeme.bottomText}  />
                <button className="generate" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
            < img src={newmeme.memeimage} className="memeimage" alt="meme" />
            <h2 className="top-text">{newmeme.topText}</h2>
            <h2 className="bottom-text">{newmeme.bottomText}</h2>
        </div>
    )
}

export default Inputs;