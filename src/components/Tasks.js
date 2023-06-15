import Task from "./Task"

const Tasks = ({deleteItem,tasks,bolderfy}) => {
  return (
    <div>
        {tasks.map((task) => (<Task key={task.id} task={task} deleteItem={deleteItem} bolderfy={bolderfy} />))}
    </div>
  )
}

export default Tasks