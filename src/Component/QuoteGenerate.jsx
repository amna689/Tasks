import React from "react";
function QuoteGenerate(props){
    function QuoteDisplay(){
        let quotes=["Believe you can and you're halfway there.", "The future belongs to those who believe in the beauty of their dreams.", "Don't watch the clock; do what it does. Keep going.", "Everything you can imagine is real.", "Dream big and dare to fail.", "Success is not final, failure is not fatal: It is the courage to continue that counts.", "Hardships often prepare ordinary people for an extraordinary destiny.", "Stay hungry, stay foolish.", "Your limitation—it's only your imagination.", "Push yourself, because no one else is going to do it for you."]
        let updatedquote="";
        for(let i=0;i<=10;i++){
            updatedquote=quotes[Math.floor(Math.random()*quotes.length)]

        }
        props.generatequote(updatedquote)
    
    }

    return(
        <div>
            <button onClick={QuoteDisplay} style={{backgroundColor:"green", width:"150px",height:"150px"}}>Generate Quote</button>
            <p>{props.quote}</p>
        </div>
    )
}
export default QuoteGenerate