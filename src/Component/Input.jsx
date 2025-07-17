import React, { useState } from "react";
import './Buttons.css'
import GreetingButton from "./GreetingButton";
function Input(){
    const[name,setname]=useState("")

    
    

    return(
        <div>
            <input value={name} onChange={(e)=>setname(e.target.value) }type="text" name="username" id="username"  placeholder="Enter your name"/>
            <GreetingButton name={name}/>
            
        </div>
        
    );
}
export default Input;