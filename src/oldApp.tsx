import { ChangeEvent, FormEvent, useState } from "react";
import { useForm, Resolver } from "react-hook-form"
import "./App.css";
import ListItem from "./ListItem";

export interface ToDo {
  title: string;
  content: string;
  find: number;
}

export interface FormValues {
  title: string;
  content: string;
}
 




function App4() {
  const [toDo, setToDo] = useState<ToDo>({
    title: "",
    content: "",
    find: Math.random() * 100,
  });
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };

  function MyForm() {
    const [textarea, setTextarea] = useState()
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted", { toDo });
    setToDo({
      title: "",
      content: "",
      find: Math.random() * 100
    });
    console.log(toDo.find)
    setToDoList([...toDoList, toDo]);
  };

  
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
          find={toDoListItem.find}
          toDo={toDoListItem}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      ))}
    </>
  );
}

export default App;
