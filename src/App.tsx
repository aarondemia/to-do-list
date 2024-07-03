import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import ListItem from "./ListItem";

type FormValues = {
  title: string;
  content: string;
};

export interface ToDo {
  title: string;
  content: string;
  find: number;
}

const resolver = (values: FormValues) => {
  return {
    values: values.title && values.content ? values : {},
    errors: {
      ...((values.title === "" || values.title.length < 5) && {
        title: {
          type: "minLength",
          message: "Title must be at least 5 characters long.",
        },
      }),
      ...(!values.content && {
        content: {
          type: "required",
          message: "Content is required.",
        },
      }),
      ...(values.content &&
        values.content.length > 100 && {
          content: {
            type: "maxLength",
            message: "Content must not exceed 100 characters.",
          },
        }),
      ...(values.title &&
        !/^[A-Za-z\s]+$/.test(values.title) && {
          title: {
            type: "pattern",
            message: "Title can only contain letters and spaces.",
          },
        }),
      ...(values.content &&
        values.content.includes("hello") && {
          content: {
            type: "custom",
            message: "Content cannot contain the word 'hello'.",
          },
        }),
    },
  };
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  function createToDo(data: FormValues) {
    const newToDo = {
      ...data,
      find: Math.random() * 100,
    };

    setToDoList((prevToDoList) => [...prevToDoList, newToDo]);
  }

  const onSubmit = handleSubmit((data) => createToDo(data));

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
