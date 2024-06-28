import { useState, ChangeEvent, FormEvent } from 'react'
import './App.css'
import Modal from "./Modal"
import ListItem from "./ListItem"

interface ToDo {
  title: string;
  content: string;
}

function App() {

  const [toDo, setToDo] = useState<ToDo>({
    title: "",
    content: ""
  })
  const [toDoList, setToDoList] = useState<ToDo[]>([{
    title: "",
    content: ""
  }])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name , value } = event.target;
    setToDo({
      ...toDo,
      [name]: value
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted", {toDo})
    setToDo({
      title: "",
      content: ""
    })
    setToDoList([...toDoList, toDo])
  }
  const handleDelete = (event: FormEvent) => {
    event.preventDefault();
    console.log("Delete")
    setToDoList(toDoList.slice(0, -1))
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      <label>
        To Do:
        <input 
        required
        type="text"
        name="title" 
        value={toDo.title}
        onChange={handleChange}
        />
        <input 
        required
        type="text"
        name="content" 
        value={toDo.content}
        onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
     </form>

      
      {toDoList.map((toDoListItem) => (
         <ListItem  
         key={toDoListItem.title + toDoListItem.content} 
         toDo={toDoListItem} 
         toDoList={toDoList} setToDoList={setToDoList} />
      ))}

    </>

  )

}

export default App
