import React from "react";
import "./UserDisplay.css"
import userpic from '../Component/assets/userpic.jpg'
const UserDisplay=({children})=>{
    return(
        <div className="container">
            <card>
                {/* <p id="user-name">{name}</p>
                <img id="userpic" src={image} alt={name}></img>
                <p id="user-desc">{Desc}</p> */}
                {children}
            </card>
        </div>
    )
}

export default UserDisplay;