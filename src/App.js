import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


function App() {

  const [tasks,setTask] = useState([{
    id:1,
    text:'Doctor\'s appointment',
    date: 'Friday the 13th',
    reminder:true
  },
  {
    id:2,
    text:'Dentists\'s appointment',
    date: 'Sunday the 15th',
    reminder:true
  }
  ])

  const deleteItem = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }
  const bolderfy = (id) => {
    setTask(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    )
    )
  }

  const submitform = (e,text,date,reminder) => {
    e.preventDefault()
    const tid = Math.random()
    const tas = {text,date,reminder, id: tid}
    console.log(tas)
    setTask([...tasks,tas])
  }

  return (
    <div className="container">
      <Header title={('Task Manager')}/>
      <AddTask submitform={submitform}/>
      <Tasks bolderfy={bolderfy} tasks={tasks} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
