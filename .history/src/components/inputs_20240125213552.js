import React from "react";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
function Inputs(){
    const [Allmemeimage , setAllmemeimage] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.imgflip.com/get_memes");
                const data = await response.json();
                setAllmemeimage(data.data.memes);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [])
    useEffect(() => {
        window.addEventListener("resize", function (){
            console.log("resized")
        })},[])
    const [newmeme , setNewmeme] = useState({
        topText:"",
        bottomText:"",
        memeimage:"https://png.pngtree.com/png-vector/20231222/ourlarge/pngtree-do-not-press-this-button-sign-vector-png-image_11376553.png"
    })
    function handleClick () {
        const random = Math.floor(Math.random() * Allmemeimage.length)
        const url = Allmemeimage[random].url
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
                onChange={handleChange}
                name="bottomText"
                value={newmeme.bottomText}  />
                <button className="generate" onClick={handleClick}>Get a new meme image  🖼</button>
            </div>
        <div className="meme-container">
            < img src={newmeme.memeimage} className="memeimage" alt="meme" />
            <h2 className="top-text">{newmeme.topText}</h2>
            <h2 className="bottom-text">{newmeme.bottomText}</h2>
        </div>
        <h1>window width {window.innerWidth}</h1>
        </div>
    )
}

export default Inputs;