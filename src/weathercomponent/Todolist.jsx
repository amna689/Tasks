import React ,{useState}from 'react'


const Todolist = () => {
    const[task,settask]=useState("");
    const[tasks,settasks]=useState([]);
    
    const handlechange=(e)=>{
        settask(e.target.value)
    }
        
    
    function adddata(){
        if(task.trim()!==""){
            settasks([...tasks,task]);
            settask("");
        }
    }

  return (
    <div>
        <input value={task} onChange={handlechange} type="text" id='add' name='add' placeholder='Enter a task'/>
        <button onClick={adddata} id='btn' style={{backgroundColor:"black",color:"white",width:"100px"}}>Add</button>
        <div>
            <h3>Tasks</h3>
            {tasks.map((item,index)=>(
                <p key={index}>{item}</p>

            ))
                
            }
        </div>
    </div>
  )
}

export default Todolist