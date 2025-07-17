import React, { useState } from 'react'
import Usestate from './Usestate'

const Todo = () => {
  const [username,setusername]=useState("")
  const[userage,setuserage]=useState("")
  const[useremail,setuseremail]=useState("")
  const[submit,setsubmit]=useState(false)


  function submitBtn(){
    setsubmit(true)
   
  }
  return (
    <div>
      <div>
      <label htmlFor="name">Enter your Name</label>
      <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" style={{marginBottom:"10px",marginLeft:"10px"}}  id='usname' name='usname' />
      
      </div>
      <div>
        <label htmlFor="age">Enter your age</label>
        <input value={userage} onChange={(e)=>setuserage(e.target.value)} type="number" style={{marginBottom:"10px" ,marginLeft:"10px"}}  id='age' name='age' />
      </div>
      <div>
        <label htmlFor="email">Enter Your Email</label>
        <input value={useremail} onChange={(e)=>setuseremail(e.target.value)} type="text" style={{marginBottom:"10px" ,marginLeft:"10px"}} id='email' name='email'/>
      </div>
      <button value={submit} onClick={submitBtn} style={{backgroundColor:"purple",color:"white",padding:"2px"}}>Submit</button>
      <h1>Preview</h1>
      {submit &&
       <div  style={{display: 'flex', flexDirection: 'row', gap:10}}>
      <div style={{backgroundColor:"purple",color:"white", width:"200px",height:"200px"}}>Name: {username}</div>
      <div style={{backgroundColor:"purple",color:"white", width:"200px",height:"200px"}}>Name: {username}<br/> Age: {userage}</div>
      <div style={{backgroundColor:"purple",color:"white", width:"200px",height:"200px"}}>Name: {username}<br/> Age: {userage} <br/> Email:{useremail}</div>
      </div>
      }
      
    </div>
  )
  
}

export default Todo