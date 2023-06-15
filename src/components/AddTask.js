import { useState } from "react"

const AddTask = ({submitform}) => {

    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    const [reminder,setReminder] = useState('false')

  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task" onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Date and Time</label>
            <input type='text' placeholder="Add Date and Time" onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Set reminder</label>
            <input type='checkbox' placeholder="Add Task" onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className="btn btn-block"  onClick={(e) => submitform(e,text,date,reminder)}/>
    </form>
  )
}

export default AddTask