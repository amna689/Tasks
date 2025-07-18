import React, { useState } from "react";
function AgeVerification(){
    const[age,setage]=useState("");
    const[message,setmessage]=useState("");
    function verification(){
       const result= age>18 ? "Eligible":"Not Eligible"
        setmessage(result)

    }
    return(
        <div>
            <input type="number" onChange={(e)=>setage(e.target.value)} placeholder="Enter your age"/>
            <button onClick={verification}>Click me</button>
            <p>{message}</p>
            
        </div>
    )
}
export default AgeVerification;