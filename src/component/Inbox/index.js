import {useCallback,useEffect} from 'react'
import TodoItem from '../TodoItem/index'
import AddTodoItemPopUpWindow from '../AddTodoItemPopUpWindow/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const Inbox = ({mainRef}) => {
    const [popUpAddItem, setPopUpAddItem] = useState(false);
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const mockUpData = [
        {content:"Review all of the new graduate applications", class:"Important", type:"Upcoming Events"},
        {content:"Reschedual calls with Patrick John & Poland Teams", class:"Important", type:"Meetings"},
        {content:"Check for flights", class:"Normal", type:"Vacation"},
        {content:"Preparing go to class today's evening", class:"Normal", type:"Upcoming Events"}
    ]

    const openAddTodoItemWindow = (e) => {
        mainRef.current.style.backgroundColor = "rgba(0,0,0,0.2)";
        setPopUpAddItem(true);
    }

    const closeAddTodoItemPopUpWindow = useCallback(() => {
        setPopUpAddItem(false);
    })

    useEffect(()=>{
        setIsLoading(true);
        setData(mockUpData);
        setIsLoading(false);
    },[])

    return !isLoading?(
        <div className="container-inbox">
            <div className="inbox-header">
                <h1>Today <span style={{fontSize:15,color:"grey"}}>Fri Feb 3</span></h1> 
                <div className="add-todoItem-icon">
                    <FontAwesomeIcon icon={faSquarePlus} style={{width:35,height:35}} onClick={openAddTodoItemWindow}/>
                </div>
            </div>
            <div className="inbox-todoItem-list">
                {data.map((item,index)=>{
                    return (<TodoItem item={item}/>)
                })}
            </div>
            <AddTodoItemPopUpWindow
                popUp={popUpAddItem}
                closeAddTodoItemPopUpWindow={closeAddTodoItemPopUpWindow}
                mainRef={mainRef}
                setData={setData}
                data={data}>
                <h2>Add a new task</h2>
            </AddTodoItemPopUpWindow>
        </div>
    ):null
}

export default Inbox;