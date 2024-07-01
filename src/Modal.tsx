import React, {useState, ChangeEvent, Dispatch} from "react"

interface Props {
    toDo: { title: string; content: string; find: number };
    toDoList: { title: string; content: string, find: number }[];
    setToDoList: Dispatch<React.SetStateAction<{ title: string; content: string; find: number }[]>>;
    setShowModal: (showModal: boolean) => void
    find: number
  }



function Modal(props: Props) {
    const [showModal, setShowModal] = useState(false);
    const [toDo, setToDo] = useState(props.toDo);
    const [toDoList, setToDoList] = useState(props.toDoList);

     
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name , value} = event.target


        const updatedToDoList = props.toDoList.map(toDo =>
            props.toDo.find === props.find ? { ...toDo, [name]: value} : toDo)

        //props.setToDoList( updatedToDoList)
        console.log(toDo.find)
        console.log(props.find)
        props.setToDoList((previous) =>
        previous.map(toDo =>
            toDo.find === props.find ? { ...toDo, [name]: value} : toDo)
    );
    }


    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={()=> props.setShowModal(false)}>X</button>
                <input 
                required 
                maxLength={30} 
                onChange={handleChange}
                placeholder= "title" 
                name="title"
                value={props.toDo.title}
                />
                <input 
                
                required 
                maxLength={200} 
                onChange={handleChange}
                placeholder= "content" 
                name="content"
                value={props.toDo.content}
                />
            </div>
        </div>
    )


}

export default Modal;
