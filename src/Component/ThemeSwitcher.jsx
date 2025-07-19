import React, { useState } from "react";
function ThemeSwitcher(){
    const[mode,setmode]=useState("light")
    
    function toggle(){ 
        setmode(mode==="light"?"dark":"light")
    }
    const themestyle= {
        backgroundColor:mode==="light"?"#fff":"#000",
        color:mode==="light"?"#000":"#fff",
        padding:"20px",
        textAlign:"center",
        height:"100vh"

    };
        
        
    return( 
        <div style={themestyle}>
            <h1>{mode==="light"?"Lightmode":"Darkmode"}</h1>
            <button onClick={toggle}>Switch to {mode==="light"?"dark":"light"} Mode</button>
            
        </div>
    )
}
export default ThemeSwitcher