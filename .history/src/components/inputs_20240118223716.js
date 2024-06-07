import React from "react";
import "../App.css";
import Meme from "./meme.js";
import { useState } from 'react';

function Inputs(){
    
    return(
        <div className="inputs-container">
            <div className="inputs">
                <label className="top">Top Text</label>
                <input  className="topinput" type="text" placeholder="input here" />
                <label className="bottom">bottom Text</label>
                <input className="bottominput" type="text" placeholder="input here" />
                <button className="generate" onClick={h}>Get a new meme image  🖼</button>
            </div>
        </div>
    )
}

export default Inputs;