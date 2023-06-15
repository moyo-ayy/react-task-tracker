import { FaTimes } from 'react-icons/fa'

const Task = ({task,deleteItem,bolderfy}) => {
  return (<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => bolderfy(task.id)}>
  <h3 id={task.id}>{task.text}<FaTimes onClick={() => deleteItem(task.id)} style={{alignSelf:'right'}}/>
  </h3><p>{task.date}</p>
  </div>
  )
}

export default Task