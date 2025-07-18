import React, { useState } from "react";
function LoggedIn(){
    const [isloggedin,setisloggedin]=useState(false)
    const fun=()=>{
        setisloggedin(isloggedin ? false :true)
    //     if(isloggedin===true){
    //  setisloggedin(false)
    //     }
    //     else if(isloggedin===false){
    //         setisloggedin(true)
       }
    


    // }
    
    
    return(
        <div>
            <button onClick={fun}>clickme</button>
            <p>{isloggedin ? "Welcome":"please login"}</p>
        </div>
    )
}
export default LoggedIn;