import React, { useState } from "react";
function DynamicGreeting(){
    const[hours,sethours]=useState(0)
    const[greeting,setgreeting]=useState("")
    const Greet=()=>{
        const hour=parseInt(hours)
        if(hour<12){
            setgreeting(alert("GoodMorning"))
        }
        else if(hour<18){
            setgreeting("Good Afternoon")
        }
        else if(hours<=24){
            setgreeting("Good Evening")
        }
        else{
            setgreeting("Please enter hours from 1 to 24")
        }
    }
    return(
        
        <div>
            <input value={hours} onChange={(e)=>sethours(e.target.value)} type="number" name="hour" id="hour" placeholder="Enter Hour" />
            <button onClick={Greet} id="btn" style={{backgroundColor:"red", width:"50px" ,height:"50px"}}>Greet</button>
            <p>{greeting}</p>


        </div>
    )
}
export default DynamicGreeting