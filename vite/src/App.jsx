import { useState } from 'react'


function App() {
  const[todo, setTodo] = useState([])
 const [task, setTask] = useState('')

 function handleChange(event){
   setTask(event.target.value)


 }

 function addTask(){
  setTodo([...todo, task])
   setTask('')
}
 function removeTask(index){
  setTodo(todo.filter((_, i) => i !== index ))
 
}

  return (
   <>
   <h1>Your TODO's</h1>
   <input type="text" onChange={handleChange}/>
   <button onClick={addTask}>Add</button>
   <div className='list'>
     {todo.map((t, index) => <li>{t} <button onClick={()=>removeTask(index)}>X</button></li>)}
   </div>
 </>
  )
}

export default App
