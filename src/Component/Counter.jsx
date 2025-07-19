import React, { useState } from "react";
function Counter(){
    const[count,setcount]=useState(0 )
    const[message, setmessage]=useState("")



    const Count=()=>{
        
        
        if(count===0){
             setmessage("Start")
        }
        else if(count>=1 && count<=4){
            setmessage("Counting...")
        }
            
        else if(count>4){
            setmessage("Limit Reached")
        
        }
        setcount(count +1)
        
    }

    return(
        <div>
            <button onClick={Count} style={{backgroundColor:"beige", width:"200px", height:"100px"}}>Count {count} <br/> {message}</button>
        </div>
    )
}
export default Counter;