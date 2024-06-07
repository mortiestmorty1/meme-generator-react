import React from "react";

function Box(props){
    const styles ={
        backgroundColor: props.on ===false ? "black" : "white",
    }
    return(
        <div className='box' key={props.box.id} style={styles}></div>
    )
}

export default Box;