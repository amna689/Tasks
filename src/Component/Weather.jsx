import React, { useState } from "react";
function Weather(){
    const[temp,settemp]=useState("")
    const [message,setmessage]=useState("")
    const Wethercomponent=()=>{
        const t=parseFloat(temp);
        isNaN(t)
        ? setmessage("Please enter a valid number")
        : t<=15 ? setmessage("It's Cold Outside") 
        :t>30 ? setmessage("It's a Hot Day")
        :setmessage("Pleasant Day")
    }

    return(
        <div>
            <input value={temp} onChange={(e)=>settemp(e.target.value)}  type="text" placeholder="Enter Temperature in degree celvius"></input>
            <button onClick={Wethercomponent} style={{backgroundColor:"yellowgreen", width:"100px", height:"50px"}}>Check Weather</button>
            <p>{message}</p>
        </div>
    )
}
export default Weather;