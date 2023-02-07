import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ item }) => {

    const setTypeIcon = () => {
        let style = {};
        switch (item.class) {
            case "Important":
                style = { width: 20, height: 20, backgroundColor: "orange", borderRadius: 100, marginLeft: 5}
                break;
            case "Normal":
                style = { width: 20, height: 20, backgroundColor: "green", borderRadius: 100, marginLeft: 5}
                break;
        }
        return <div style={style}></div>
    }

    return(
        <div className = "container-all">
            <div className="container-todoItem">
                <div className="todoItem-content-container">
                    <div className="todoItem-content">
                        <div className="checkIcon"><FontAwesomeIcon icon={faPenToSquare} style={{width:30, height:30,color:"#5D6D7E"}}/></div>
                        <span style={{ marginLeft: 5, fontWeight: 'bold', fontSize:17 }}>{item.content}</span>
                    </div>
                    <div className="todoItem-class" style={{marginLeft:35}}>
                        <span style={item.class=="Important"?{color:"red",fontWeight:'bold', fontSize:14}:{color:"green",fontWeight:'bold',fontSize:14}}>{item.class}</span>
                    </div>
                </div>
                <div className="todoItem-type">
                    <span style={{color:"gray"}}>{item.type}</span>
                    {setTypeIcon()}
                </div>
            </div>
            <div style={{height:2,backgroundColor:"rgb(240, 240, 240)"}}></div>
        </div>
    )
}

export default TodoItem;