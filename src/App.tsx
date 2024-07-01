import React from "react"
import { useForm, Resolver } from "react-hook-form"
import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ListItem from "./ListItem";

type FormValues = {
  title: string
  content: string
}

export interface ToDo {
    title: string;
    content: string;
    find: number;
}
  

const resolver: Resolver<FormValues> = async (values) => {

  return {
    values: values.title ? values : {},
    errors: !values.content
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  }
}

export default function App() {

    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver })
  

  const [toDo, setToDo] = useState<ToDo>({
    title: "",
    content: "",
    find: Math.random() * 100,
  });

  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  function actionToDo(data: FormValues) {
    console.log(data)
    const newToDo = {
      ...data,
      find: Math.random() * 100,
  }
    setToDo(newToDo)
    console.log(toDo)
    setToDoList((prevToDoList) => {
      const updatedList = [...prevToDoList, newToDo];
      console.log(updatedList);
      return updatedList;
    });
    
  }
    

  
  const onSubmit = handleSubmit((data) => actionToDo(data))


  return (
    <div>
        
    <form onSubmit={onSubmit}>
      <input {...register("title")} placeholder="title" />
      {errors?.title && <p>{errors.title.message}</p>}

      <input {...register("content")} placeholder="content" />

      <input type="submit" />
    </form>

    {toDoList.map((toDoListItem) => (
        <ListItem
          find={toDoListItem.find}
          toDo={toDoListItem}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
    ))}
    </div>
  );


  
}
