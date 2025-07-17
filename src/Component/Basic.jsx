import React from "react"
import { useState } from "react"
function Basic(){
    const[color,setcolor]=useState("black")
    const fun=()=>{
        if(color=="black"){
        setcolor("grey")}
        else if(color=="grey"){
        setcolor("black")
        }
    }

    return(
        <div style={{backgroundColor:color, height:"100vh"}}>
        <button onClick={fun} id="btn" style={{backgroundColor:"red", color:"white", width:"100px", height:"100px"}}>Click me</button>
        
        </div>

    )
}
export default Basic