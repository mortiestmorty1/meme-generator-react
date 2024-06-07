import React from "react";
import { useState } from 'react';

function Box(props){
    const styles ={
        backgroundColor: props.on ===false ? "black" : "white",
    }
    function handleClick(){
      props.toggle(props.id)
    }
    return(
        <div className='box' onClick={handleClick}  style={styles}></div>
    )
}

export default Box;