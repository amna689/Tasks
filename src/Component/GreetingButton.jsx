import React from "react";
function GreetingButton(props){
    const handleclick=()=>{
        alert("Hello"+" "+ props.name)

    }
    
   
    return(
        <button onClick={handleclick}>Clickme</button>
        

    )
   
}
export default GreetingButton;