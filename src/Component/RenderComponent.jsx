import React, { useState } from "react";
function RenderComponent(){
    const [user,setuser]=useState("")
    
    const Render=()=>{
       
       if(user==="Admin" || user==="admin"){
        alert("It's Admin")
       }
    
       else if(user==="User" || user==="user")
       {
        alert("It's User")
       }
       else{
        alert("I'm a guest")
       }

    }


    
    return(
        <div> 
            <input onChange={(e)=>setuser(e.target.value)}type="text"placeholder="Enter your credentials"/>
            <button id="btn" onClick={Render} style={{backgroundColor:"green",width:"50px",height:"50px"}}>Submit</button>

            </div>
    )
}
export default RenderComponent;