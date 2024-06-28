import React, {useState, ChangeEvent} from "react"



function Modal(props: { toDo: { title: string; content: string; }; setShowModal: (arg0: boolean) => void; }) {
    const [info, setInfo] = useState({
        title: props.toDo.title,
        content: props.toDo.content
    })
     
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name , value} = event.target
        
        setInfo(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={()=> props.setShowModal(false)}>X</button>
                <input 
                required 
                maxLength={30} 
                onChange={handleChange}
                placeholder= "Title" 
                name="Title"
                value={info.title}
                />
                <input 
                
                required 
                maxLength={200} 
                onChange={handleChange}
                placeholder= "Content" 
                name="Content"
                value={info.content}
                />
            </div>
        </div>
        
        
    )


}

export default Modal;
