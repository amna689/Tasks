import React, { useState } from 'react'

const Userstatus = (props) => {
  const admin =props.admin
  const user = props.user
  const [val, setVal] = useState ("");
  function checkUser(){

    if(val.trim() === admin ){
   alert("i am admin")}
   else if(val=== user){
    alert("Im not user ")
   }


  
}



  
  return (
    <div>
        <h1>
        Userstatus
        </h1>
       
        <input id='admin' type='text' placeholder='Enter your credential'value={val} onChange={(e)=>setVal(e.target.val)}></input>
        <input id='user'type='text' placeholder='Enter your credential' ></input>
         <button id="admin"
        onClick={checkUser} style={{backgroundColor: "red", width:"50px", padding: "10px", border: "2px" ,borderColor:"black", color:"white"}}> 
            logIn
        </button>
        </div>
  
  )
}

export default Userstatus