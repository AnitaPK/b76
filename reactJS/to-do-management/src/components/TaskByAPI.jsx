import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TaskByAPI = () => {
    const [tasks,setTasks] = useState([])

    async function fetchData(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(res.data)
        setTasks(res.data)
    }
useEffect(()=>{
    fetchData()
},[])

  return (
    <div>
      Task By API

      <ul>
        {tasks.map((task,i)=>(
            <li key={i}>{task.title} </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskByAPI
