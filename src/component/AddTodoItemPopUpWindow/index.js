import {useState,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import DropDownList from '../DropDownList/index'
import './style.css'

const AddTodoItemPopUpWindow = ({ popUp, closeAddTodoItemPopUpWindow, mainRef, data, setData, children }) => {

    const [content,setContent] = useState("");
    const [priority,setPriority] = useState("Important");
    const [type,setType] = useState("Upcoming Events");

    const closeWindow = () => {
        mainRef.current.style.backgroundColor = "#FFF"
        closeAddTodoItemPopUpWindow();
    }

    const itemPriority = ["Important", "Normal"]
    const itemType = ["Upcoming Events", "Meetings", "Vacation"]

    const button_submit_click = () => {
        if(content==="") return;
        const newTask = {content:content,class:priority,type:type};
        data.push(newTask)
        setData(data);
        mainRef.current.style.backgroundColor = "#FFF"
        closeAddTodoItemPopUpWindow();
    }

    return (
        popUp ? (
            <div className="container-popup">
                <div className="popup-inner">
                    <FontAwesomeIcon icon={faXmark} className="close-btn" onClick={closeWindow} style={{ width: 25, height: 25, cursor: "pointer" }} />
                    {children}
                    <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Content: </h3>
                    <input type="text" className="input-content" onChange={(e)=>setContent(e.target.value)}></input>
                    <DropDownList 
                        options={itemPriority} 
                        header="Task Priority" 
                        optionHeader="Please select priority" 
                        setSelectedValue={setPriority}/>
                    <DropDownList 
                        options={itemType} 
                        header="Task Type" 
                        optionHeader="Please select type" 
                        setSelectedValue={setType}/>
                    <div className="submit-button-wrapper">
                        <button type="button" className="submit-button" onClick={button_submit_click}>Submit</button>
                    </div>
                </div>
            </div>
        ) : ""
    )
}

export default AddTodoItemPopUpWindow;