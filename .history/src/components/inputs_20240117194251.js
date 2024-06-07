import React from "react";
import "../App.css";

function Inputs(){
    function handleClick () {

    }
    return(
        <div className="inputs-container">
            <div className="inputs">
                <label className="top">Top Text</label>
                <input  className="topinput" type="text" placeholder="input here" />
                <label className="bottom">bottom Text</label>
                <input className="bottominput" type="text" placeholder="input here" />
                <button className="generate" onClick={handleClick()}>Get a new meme image  🖼</button>
            </div>
        </div>
    )
}

export default Inputs;