import React, { useState } from "react";
import "./Buttons.css"

function Button({name}){
    const[count,setcount]=useState(0)
    const Like=()=>{
        setcount(prev=>prev+1);
        
        
    }
    

    
    return(
    
        <div>
            { <button onClick={Like} id="btn" >{name}{count}</button> }
          

        </div>
    )
}
export default Button;