import React from 'react'
import Form from './Form'
import { useLocation } from 'react-router-dom'

const FormSubmit = () => {
    const location=useLocation();
    const{uname,uage,uemail}=location.state || {};
  return (
    <div style={{padding:"20px"}}>
        <h2 style={{color:"blue", fontSize:"30px"}}>welcome,{uname}</h2>
        <p><strong>Name:</strong>{uname}</p>
        <p><strong>Age:</strong>{uage}</p>
        <p><strong>Email:</strong>{uemail}</p>
    </div>
  );
}

export default FormSubmit