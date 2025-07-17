import React from 'react'

const Weather = (props) => {
    const temp= props.temperature;
    let message="";
    if(temp<=15){
        message="It's cold outside!"
    }
    else if(temp<30 && temp>15){
        message="It's Nice Outside"
    }
    else {
        message="It's hot outside!"
    }
  return (
    <div>
        <p>Temperature:{temp} degree celcius</p>
        <p>{message}</p>
    </div>
  )
}

export default Weather