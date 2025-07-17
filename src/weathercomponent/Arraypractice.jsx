import React from 'react'

const Arraypractice = () => {
    const cities=["Lahore", "Islamabad","Rawalpindi","Multan","Faislabad"]
    cities.unshift("Lhr")
    cities.pop()
    const citieslist=[]
    const num=[1,2,5,7,8,10,12,45,67,13]
    const numbers=num.reduce((acc,currValue)=>{
        return currValue>10?acc + currValue:acc;
    },0);
    console.log({numbers})

    cities.forEach((city,index)=>{
        citieslist.push(<li key={index}>{city}</li>)

    })
    
    
    // for (let index = 0; index < cities.length; index++) {
    //     citieslist.push(<li key={index}>{cities[index]}</li>)

       
        
    // }
  return (
    <div><ul>
      <p>{citieslist}</p>
      <li>{numbers}</li>
        </ul>

    </div>
  )
}

export default Arraypractice
