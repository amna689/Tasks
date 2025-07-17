import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const Form = () => {
//   const [formdata, setformdata] = useState({ name: "", email: "", age: "" });
//  const [submitData,setSubmitData]= useState(false)
//   const HandleChange = (e) => {
//     const { name, value } = e.target;
//     setformdata((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };


//   const clearform = () => {
//     setformdata({
//       name: '',
//       email: '',
//       age: ''
//     });
//   };

//   const regform = (e) => {
//     e.preventDefault(); // Prevent form reload
//     console.log("Form Submitted ✅", formdata);
//   };
//   function submitFun(){
//     setSubmitData(true)
//   }

//   return (
//     <div>
//       <form onSubmit={regform}>
//         <input
//           name="name"
//           value={formdata.name}
//           onChange={HandleChange}
//           type="text"
//           placeholder="Enter Your Name"
//         /><br /><br />

//         <input
//           name="age"
//           value={formdata.age}
//           onChange={HandleChange}
//           type="number"
//           placeholder="Enter Your Age"
//         /><br /><br />

//         <input
//           name="email"
//           value={formdata.email}
//           onChange={HandleChange}
//           type="text"
//           placeholder="Enter Your Email"
//         /><br /><br />

//         <button
//         onClick={submitFun}
//           type="submit"
//           style={{
//             backgroundColor: "red",
//             color: "white",
//             width: "100px",
//             border: "solid",
//             padding: "10px",
//             marginRight: "10px"
//           }}
//           value={submitData}
//         >
//           Submit
//         </button>

//         <button
//           type="button"
//           onClick={clearform}
//           style={{
//             padding: '10px',
//             backgroundColor: 'gray',
//             color: 'white',
//             border: 'none'
//           }}
//         >
//           Clear
//         </button>
//       </form>

//       <div style={{ marginTop: '20px' }}>
//         <h3>👀 Live Preview:</h3>
//         <p><strong>Name:</strong>{submitData === true? formdata.name :""} </p>
//         <p><strong>Email:</strong>{submitData === true? formdata.email :""}  </p>
//         <p><strong>Age:</strong> {submitData === true? formdata.age :""} </p>
//       </div>
//     </div>
//   );
// };

const Form=()=>{
    const[uname,setusername]=useState("")
    const[uage,setuserage]=useState("")
    const[uemail,setuseremail]=useState("")
    const[submit,setSubmitData]=useState(false)
    const navigate=useNavigate();

    function HandleChange(e){
        const{name,value}=e.target;
        if(name==="username"){
            setusername(value);
        }
        else if(name==="userage"){
            setuserage(value);
        }
        else if(name==="useremail"){
            setuseremail(value);
        }

            
        }
        ;
        function handlesubmitdata(e){
            e.preventDefault();
            if(uname.trim()=="" || uemail.trim()=="" || uage.trim()==""){
                alert("Please Enter all the details")
                return;
            }
            setSubmitData(true);
            console.log("Form Submitted", {uname},{uemail},{uage})
            setTimeout(() => {
      navigate('/submit', {
        state: { uname, uage, uemail }
      });
    }, 3000); // 3000 ms = 3 seconds
  }
            
        
        const cleardata=()=>{
            setusername("")
            setuserage("")
            setuseremail("")
            
        }

    

    


return(
    <div>
        <form onSubmit={handlesubmitdata}>
        <h1 style={{color:'purple',}} ><strong>Registration Form</strong></h1>
        <div style={{marginBottom:"10px"}}><label style={{display: "inline-block", width: "150px"}}  htmlFor="username">Enter Your Name</label>
        <input value={uname}  id='username' type="text" name='username' onChange={HandleChange} /></div>
        <div style={{marginBottom:"10px"}}><label style={{display: "inline-block", width: "150px"}}htmlFor="userage">Enter your age</label>
        <input value={uage} id="userage" type="number" name='userage' onChange={HandleChange} /> </div>
        <div style={{marginBottom:"10px"}}><label style={{display: "inline-block", width: "150px"}} htmlFor="email">Enter your email</label>
        <input value={uemail} id="useremail"type="text" name='useremail' onChange={HandleChange} /> </div>
        <button  id='btn' style={{backgroundColor:"Green", color:'white',width:"100px",padding:"10px"}}>Submit</button>
        <button  onClick={cleardata} type='button' style={{backgroundColor:"grey", color:'white',width:"100px",padding:"10px"}}>clear</button>
    </form>
    <div style={{ marginTop: '20px' }}>
       <h3>👀 Live Preview:</h3>
      <p><strong>Name:</strong> {submit === true ? uname : ""}</p>
      <p><strong>Email:</strong> {submit === true ? uemail : ""}</p>
      <p><strong>Age:</strong> {submit === true ? uage : ""}</p>
       </div>
     </div>

);
}



export default Form;
