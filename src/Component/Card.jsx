import React from "react";
import "./Cards.css"
function Card(props){
    return( 
        <div >

         <div className="uname">
            <p id="username">{props.name}</p>

         </div>
         <div className="uage">
            <p id="userage">{props.age}</p>

         </div>
         </div>
    )
}

export default Card;