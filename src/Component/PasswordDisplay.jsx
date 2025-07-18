import React from "react";
const PasswordDisplay=(props)=>{
    function generatepassword(){
        const char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$*&"
        let newpassword='';
        for(let i=0;i<=10;i++)
        {
            newpassword+=char.charAt(Math.floor(Math.random()*char.length))
        }
        props.passwordgenerator(newpassword)
    }

    return(
        <div>
            <button onClick={generatepassword} style={{backgroundColor:"red",width:"150px",height:"100px"}}>generatepassowrd</button>
            {/* <p><strong>Password=</strong>{props.password}</p> */}

        </div>
    )
}
export default PasswordDisplay