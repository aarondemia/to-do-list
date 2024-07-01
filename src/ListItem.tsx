import { Dispatch, useState } from "react";
import { ToDo } from "./oldApp";
import Modal from "./Modal";

interface Props {
  toDo: { title: string; content: string; find: number };
  toDoList: { title: string; content: string; find: number}[];
  setToDoList: Dispatch<React.SetStateAction<ToDo[]>>;
  find: number
  //   (toDoList: { title: string; content: string }[]) => void;
}

function ListItem(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [toDo, setToDo] = useState(props.toDo);
  const [toDoList, setToDoList] = useState(props.toDoList);

  function deleteItem() {
    console.log(toDo.find);
    console.log(props.toDo.find);
    //console.log(toDoList);
    //console.log(toDoList.filter((item) => item.find !== props.toDo.find));
    props.setToDoList((previous) =>
      previous.filter((item) => item.find !== props.toDo.find)
    );
    //console.log(toDoList);
  }

  return (
    <>
      <div>
        <p>{props.toDo.title}</p>
        <button onClick={() => setShowModal(true)}>EDIT</button>
        <button onClick={deleteItem}>DELETE</button>
      </div>
      {showModal && <Modal find={props.toDo.find} toDo={props.toDo} setToDoList={props.setToDoList} setShowModal={setShowModal} toDoList={props.toDoList} />}
    </>

  );
}

export default ListItem;
