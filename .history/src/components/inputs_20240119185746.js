import React from "react";
import "../App.css";
import Meme from "./meme.js";
import { useState } from "react";
function Inputs(){
    const [memeimage , setmemeimage] = useState("https://png.pngtree.com/png-vector/20231222/ourlarge/pngtree-do-not-press-this-button-sign-vector-png-image_11376553.png")
    const [newmeme , setNewmeme] = useState({
        topText:"",
        bottomText:"",
        memeimage:""
    })
    function handleClick () {

        const memearray = Meme
        const random = Math.floor(Math.random() * memearray.length)
        const url = memearray[random].url
        setmemeimage(url)
    }
    return(
        <div className="inputs-container">
            <div className="inputs">
                <label className="top">Top Text</label>
                <input  className="topinput" type="text" placeholder="input here" />
                <label className="bottom">bottom Text</label>
                <input className="bottominput" type="text" placeholder="input here" />
                <button className="generate" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
            < img src={memeimage} className="memeimage" alt="meme" />
        </div>
    )
}

export default Inputs;