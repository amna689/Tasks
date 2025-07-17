import React,{useState} from 'react'

const Usestate = () => {
    const [count, setcount]=useState(0)
    function counter(){
        setcount(count+1);
    }

  return (
    <button onClick={counter} style={{backgroundColor:"black", color:"white",padding:"10px",width:"110px"}} id='btn' >Count{count}</button>
    
  )
};



export default Usestate;