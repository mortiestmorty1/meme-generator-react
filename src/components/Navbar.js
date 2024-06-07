import React from "react";
import Troll from "./Troll-Face.svg";
import "../App.css";
function Navbar(){
    return(
        <div className="nav-container">
            <nav className="navbar">
                <img src={Troll} className="image" alt="Troll Face" />
                <h1>Meme Generator</h1>
                <section className="info">
                    <p>React Course - Project 3</p>
                </section>
            </nav>
        </div>
    )
}

export default Navbar;