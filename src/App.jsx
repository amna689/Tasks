import React, { useState } from 'react'
// import Weather from './weathercomponent/Weather'
// import Userstatus from './weathercomponent/Userstatus'
//import User from './weathercomponent/UserCheck'
// import Practice from './weathercomponent/Practice'
// import ArrowFunctions from './weathercomponent/ArrowFunctions'
// import Usestate from './weathercomponent/Usestate'
// import Form from './weathercomponent/Form'
// import FormSubmit from './weathercomponent/FormSubmit'
// import Arraypractice from './weathercomponent/Arraypractice'
// import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
// import Todolist from './weathercomponent/Todolist'
// import Todo from "./weathercomponent/Todo"
import UserDisplay from './Component/UserDisplay';
import './Component/UserDisplay.css';
import userpic from './Component/assets/userpic.jpg'
import userpic2 from './Component/assets/userpic2.jpg'
import userpic3 from './Component/assets/userpic3.jpg'
import Card from './Component/card';
import Button from './Component/Button';
import Input from './Component/Input';
import Active from './Component/Active'
import Basic  from './Component/Basic';
import PasswordDisplay from './Component/PasswordDisplay';
import QuoteGenerate from './Component/QuoteGenerate';
import BMICALCULATOR from './Component/BMICALCULATOR.jsx';
import LoggedIn from './Component/LoggedIn.jsx';
import AgeVerification from './Component/AgeVerification.jsx';
import DynamicGreeting from './weathercomponent/DynamicGreetings.jsx';
import ThemeSwitcher from './Component/ThemeSwitcher.jsx';
import RenderComponent from './Component/RenderComponent.jsx';





 
const App = () => {
  // const[BMICALC,setMICALC]=useState("")
  // const handleBMI=(newBMI)=>{
  //   setMICALC(newBMI)

  // }

  // const[quote,setquote]=useState("")
  // const handlequote=(updatedquote)=>{
  //   setquote(updatedquote);

  
  // const [password,setpassword]=useState("")
  // const handlepassword=(newpassword)=>{
  //   setpassword(newpassword);
  // };
  // function generatepassword(){
  //   const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#*&$";
  //   let newPassword=""
    
  //    for (let i = 0; i < 10; i++) {
  //    newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   setpassword(newPassword)
  // }
  
  // function Panel({ title, children }) {
  // const [isActive, setIsActive] = useState(false);
  
  // const[activeindex,setactiveindex]=useState(0);
  // const[count, setcount]=useState(0)
  // function handleclick(){
  //   setcount(count+1)
  // }
  
  
  
  return(
    <div>
      <AgeVerification/>
      <DynamicGreeting/>
      {/* <ThemeSwitcher/> */}
      <RenderComponent/>
      {/* <LoggedIn/> */}
      {/* <BMICALCULATOR handleBMI={handleBMI} />
      <p><strong>YOUR BMI:</strong>{BMICALC}</p> */}
      {/* <QuoteGenerate generatequote={handlequote} quote={quote}/> */}
      {/* <button onClick={generatepassword} style={{backgroundColor:"red",width:"150px",height:"100px"}}>generatepassowrd</button>
       <h3><strong> Your password:</strong></h3>
       <p>{password}</p>
      <PasswordDisplay passwordgenerator={ handlepassword}/> */}
      {/* <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section> */}
      {/* <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submit" element={<FormSubmit />} />
      </Routes>
    
     
     
     
     </BrowserRouter> */}
     {/* <Arraypractice/> */}
     {/* <Todolist/> */}
    {/* <Todo/>  */}
    {/* <Practice/> */}
    {/* <div className='container2'> */}
    {/* <UserDisplay name="Amna" Desc="Desc1" image={userpic}/>
    <UserDisplay name="Smara" Desc="Desc2" image={userpic2}/>
    <UserDisplay name="Laiba" Desc="Desc3" image={userpic3}/> */}
    {/* <UserDisplay> <p id="username">Amna</p> 
     <p id="user-desc">Desc1</p>
      <img id="userpic" src={userpic} alt="Amna" /></UserDisplay> 
      <UserDisplay> <p id="username">Amna</p> 
     <p id="user-desc">Desc1</p>
      <img id="userpic" src={userpic} alt="Amna" /></UserDisplay>
      <UserDisplay> <p id="username">Amna</p> 
     <p id="user-desc">Desc1</p>
      <img id="userpic" src={userpic} alt="Amna" /></UserDisplay>
    </div>  */}
    {/* <Card name="Amna" age="24"/> */}
    {/* <Button name="Like"/> */}
    {/* <Input/> */}
    {/* <Active
    handleclick={handleclick}
    count={count}
    text="clickme"

    /> 
   */}
   {/* <Active/> */}
   {/* <Basic/> */}
  
    </div>

  
  );
}

export default App;