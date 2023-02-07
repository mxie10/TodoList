import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import DropDownList from '../DropDownList/index'

const AddTodoItemPopUpWindow = ({ popUp, closePopUpWindow, mainRef, children }) => {

    const closeWindow = () => {
        mainRef.current.style.backgroundColor = "#FFF"
        closePopUpWindow();
    }

    const itemPriority = ["Important", "Normal"]
    const itemType = ["Upcoming Events", "Meetings", "Vacation"]

    return (
        popUp ? (
            <div className="container-popup">
                <div className="popup-inner">
                    <FontAwesomeIcon icon={faXmark} className="close-btn" onClick={closeWindow} style={{ width: 25, height: 25, cursor: "pointer" }} />
                    {children}
                    <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>Content: </h3>
                    <input type="text" className="input-content"></input>
                    <DropDownList options={itemPriority} header="Task Priority" optionHeader="Please select priority" />
                    <DropDownList options={itemType} header="Task Type" optionHeader="Please select type" />
                    <div className="submit-button-wrapper">
                        <button type="button" className="submit-button">Submit</button>
                    </div>
                </div>
            </div>
        ) : ""
    )
}

export default AddTodoItemPopUpWindow;