import React ,{useState} from 'react'

const UserCheck = () => {
 const admin = "admin"
  const [val, setVal] =useState("");

const setAdmin= ()=>{
if(val === admin){
    alert("i am admin")
   }
   else if (val === "user"){
    alert("i am user")
   }
   else{
    alert("i am no one")
   }
}
  
  return (
    <div>
        <input value={val} onChange={(e)=>setVal(e.target.value)} placeholder='Enter value here'/>
        <button onClick={setAdmin}
          style={{backgroundColor:"brown", padding:"4px", border:"2px", borderColor:"black"}}> Check</button>
    </div>
  )
}
export default UserCheck;