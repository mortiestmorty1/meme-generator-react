import React from "react";

function Box(props){
    const [on , setOn] = useState(props.on)
    const styles ={
        backgroundColor: on ===false ? "black" : "white",
    }
    function handleClick(){
        setOn(prevOn => !prevOn)
    }
    return(
        <div className='box' onClick={handleClick}  style={styles}></div>
    )
}

export default Box;