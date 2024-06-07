import React from "react";
import "../App.css";

function Inputs(){
    return(
        <div className="inputs-container">
            <form className="inputs">
                <label className="top">Top Text</label>
                <input  className="topinput" type="text" placeholder="input here" />
                <label className="bottom">Top Text</label>
                <input className="bottominput" type="text" placeholder="input here" />
                <button>Generate</button>
            </form>
        </div>
    )
}

export default Inputs;