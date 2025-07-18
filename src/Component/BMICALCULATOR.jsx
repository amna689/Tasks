import React, { useState } from "react";
const BMICALCULATOR=(props)=>{
    const [height,setheight]=useState("")
    const [weight,setweight]=useState("")
    let newBMI;
    function genarateBMI(){
        const h=parseFloat(height)
        const w=parseFloat(weight)
        if(!h||!w||h<0){
            alert("Enter valid  height and weight");
            return;
        }
        newBMI=w/(h*h);
         props.handleBMI(newBMI.toFixed(2))

        



    }
   

    return(
        <div>
            <input value={height} onChange={(e)=>setheight(e.target.value)} type="number"  name="height" id="height" placeholder="Enter Height" /> 
            <input value={weight} onChange={(e)=>setweight(e.target.value)} type="number" name="weight" id="weight" placeholder="Enter weight" />
            <button onClick={genarateBMI} style={{backgroundColor:"green",width:"100px",height:"50px"}}>GenerateBMI</button>
        </div>
    )
}
export default BMICALCULATOR;