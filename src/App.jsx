import { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.length){
      let newTask={
    text:task,
    isChecked:false
  }

    setTaskList((prev)=>[...prev,newTask])
    };
    
  };

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  console.log(task);

  const removeTask=(id)=>{
   let updatedList = taskList.filter((val,ind)=>{
      if(ind !== id){
        return val
      }
    });

    setTaskList(updatedList);
    

  }

  const handleCheck=(e)=>{
    
    let id =  e.target.id;

    const updatedList = taskList.map((el, ind)=>{
      if(ind == id){
      return { ...el,isChecked :!el.isChecked}
      }
        return el;
      

    });
    setTaskList(updatedList)
   

  }

  
  //parent
  //subparent=>input+button
  //subparent=> ul=>li =>checkbox+text+button
  return (
    <div className="to-do-container">
      <h2>To-Do-App</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add your Task"
          value={task}
          onChange={(e) => handleTask(e)}
        />
        <button id="butt1" onClick={()=>addTask()}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {taskList.map((tas, index) => {
            return (
              <li key={`listItem-${index}`}>
                <div className="list-item">
                  <div className="input-selection">
                    <input type="checkbox" checked={tas.isChecked} id={index} onChange={(e)=>handleCheck(e)}/>
                    <label style={{textDecoration:`${tas.isChecked?'line-through':'none'}`}}>{tas.text}</label>
                  </div>
                  <div>
                    <button id="butt2" onClick={()=>removeTask(index)}>X</button>
                  </div>
                </div>
              </li>
            );
          })}
          {taskList.length === 0 && <p id="msg">Write to create new task</p>}
        </ul>
      </div>
    </div>
  );
};

export default App;
