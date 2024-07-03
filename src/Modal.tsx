import { ChangeEvent } from "react";
import { ToDo } from "./oldApp";

interface Props {
  toDo: { title: string; content: string; find: number };
  closeModal: () => void;
  find: number;
  updateToDo: (toDo: ToDo) => void;
}

export default function Modal(props: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    props.updateToDo({ ...props.toDo, [name]: value });
  }
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={() => props.closeModal()}>X</button>
        <input
          required
          maxLength={30}
          onChange={handleChange}
          placeholder="title"
          name="title"
          value={props.toDo.title}
        />
        <input
          required
          maxLength={200}
          onChange={handleChange}
          placeholder="content"
          name="content"
          value={props.toDo.content}
        />
      </div>
    </div>
  );
}
