import { Dispatch, useState } from "react";
import Modal from "./Modal";
import { ToDo } from "./oldApp";

interface Props {
  toDo: { title: string; content: string; find: number };
  toDoList: { title: string; content: string; find: number }[];
  setToDoList: Dispatch<React.SetStateAction<ToDo[]>>;
  find: number;
}

function ListItem(props: Props) {
  const [showModal, setShowModal] = useState(false);

  function deleteItem() {
    props.setToDoList((previous) =>
      previous.filter((item) => item.find !== props.toDo.find)
    );
  }

  return (
    <>
      <div>
        <p>{props.toDo.title}</p>
        <button onClick={() => setShowModal(true)}>EDIT</button>
        <button onClick={deleteItem}>DELETE</button>
      </div>
      {showModal && (
        <Modal
          find={props.toDo.find}
          toDo={props.toDo}
          closeModal={() => setShowModal(false)}
          updateToDo={(toDo: ToDo) => {
            props.setToDoList((previous) => {
              return previous.map((t) =>
                t.find === props.toDo.find ? toDo : t
              );
            });
          }}
        />
      )}
    </>
  );
}

export default ListItem;
