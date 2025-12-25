import {useState} from 'react'
import '../style/style.css'
export function TodoApp(){
  const [userInput,setUserInput] = useState('')
  const [tasks,setTasks] = useState([])
  const [editIndex,setEditIndex] = useState(null)
  function addTask() {
  if (!userInput) return alert("Write Something First");
  if (editIndex !== null) {
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? userInput : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
  } else {
    const taskList = [...tasks];
    taskList.push(userInput);
    setTasks(taskList);
  }
  setUserInput("");
}

  function deleteTask(idx){
    const taskList = tasks.filter((task,index)=>(index !== idx))
    setTasks(taskList)
  }
  function editTask(idx){
    setUserInput(tasks[idx]);
    setEditIndex(idx);
  }
  return (
    <div>
      <h1>My Todo Tasks</h1>
      <input type='text' value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
      <button onClick={addTask}>{editIndex !== null ? 'Update' :'Add'}</button>
      <ol>
        {
          tasks.map((task,index)=>{
            return (
            <div>
              <li key={index}>
                {task}
              </li>
              <button onClick={()=>editTask(index)}>Edit</button>
              <button onClick={()=>deleteTask(index)}>Delete</button>
            </div>
            )
          })
        }
      </ol>
    </div>
    )
}