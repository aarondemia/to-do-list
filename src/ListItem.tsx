import React, {useState, ChangeEvent} from "react"
import Modal from "./Modal"

interface Props {
    toDo: {title: string, content: string};
    toDoList: {title: string, content: string}[];
    setToDoList: (toDoList: 
        {title: string, content: string}[]
    ) => void;
}


function ListItem(props: Props) {
    const [showModal, setShowModal] = useState(false)
    const [toDo, setToDo] = useState(props.toDo)
    const [toDoList, setToDoList] = useState(props.toDoList)


    function deleteItem() {
        console.log(toDo)
        console.log(toDoList)
        console.log(toDoList.filter(item => item.title !== toDo.title))
        props.setToDoList(toDoList.filter(item => item.title !== toDo.title))
        console.log(toDoList)
    }

    return (
        <div>
            <p>{props.toDo.title}</p>
            <button onClick={() => setShowModal(true)}>EDIT</button>
            <button onClick={deleteItem}>DELETE</button>
        </div>
        // {showModal && <Modal toDo: {props.toDo} setShowModal={setShowModal}/>}

    )
}

export default ListItem;