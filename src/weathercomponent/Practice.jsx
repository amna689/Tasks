import React from 'react'

// function Practice(a){
//     for(let i=1;i<11;i++)
//        {console.log(`${a*i}`);}
    
    
//     }

// Practice(5);

// function Practice(a,b){
//     console.log(a*b)
// }
// Practice(5,2);

// function Practice(a,b){
//     return a*b
// }
// console.log(Practice(2,3))


function Practice(){
    console.log("Hello world")
}
Practice();
function Greetuser(name){
    console.log(`Hello ${name}`)

}
Greetuser("Amna");
//Function for Square num
function Square(num){
    return console.log(`${num*num}`)
}
Square(3);
//Function for even num

function iseven(a){
    if(a%2==0)
        return(true)
    else{
    console.log(false)}

}
iseven(5)
//Function for prime num

function isprime(a){
    if(a<=1){
        return console.log("not a prime number")
    }
    for(let i=2; i<a; i++){
        if(a%i===0){
            return console.log("not a prime number")
        }



    }
    return console.log("is a prime number")


}
isprime(11)
//Function for Sum num up to n
function sum(n){
    let add=0;
    for(let i=0;i<=n;i++){
         add += i;
        
    }
    return console.log(`${add}`)


}
sum(8);

function countVowel(str){
    if(str==="a"|| str==="e"|| str==="i" || str==="o" || str==="u")
        {
        return console.log("Its a vowel")
    }
    else
    { return console.log("It's not a vowel")}

}
countVowel("u");

//reverse a string
function rev(str){
    let name=str.split("");
    const revstr=name.reverse().join("");
    console.log({revstr})


}


rev("Amna");

 export default Practice

 
 
