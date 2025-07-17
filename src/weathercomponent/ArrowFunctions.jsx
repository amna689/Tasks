import React from 'react'
import { flushSync } from 'react-dom';
//greet

const ArrowFunctions = (name) => {console.log(`Hello ${name}`);
  
}
ArrowFunctions("Amna");


// const Squaerenum=(n)=>{
//     console.log(`${n*n}`)

// }
// Squaerenum(2);
// const iseven=(a)=>{
//     if(a%2==0){
//         return true
//     }
//     else{
//         return false
//     }


// }
// console.log(iseven(2));

// const len=(str)=>{
//     return str.length;

// }
// console.log((len("Amna")));
const Addition=(a,b)=>{
    return a+b

}
console.log((Addition(3,4)));

const num=[1,2,3,4,5,6,-1,-2,-3,-4,-5]

const positive=(n)=>{
    return n>=1

    }
    const result=num.filter(positive);
console.log(result);

const vowel=(n)=>{
    if(n==="a"||n==="e"||n==="i"||n==="o"||n==="u"){
        return true;
    }
    else
    {
        return false;
    }
}
console.log(vowel("u"));

const numbers=[1,2,3,4,5,6,7,8,9,44,45,47,89,88]
const evennum=(n)=>{
    
    return n%2==0;
}
const res=numbers.filter(evennum);
const sum=res.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
    

export default ArrowFunctions;