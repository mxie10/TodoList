import TodoItem from '../TodoItem/index'

export const Inbox = () => {

    const mockUpData = [
        {content:"Review all of the new graduate applications", class:"Important", type:"Upcoming Events"},
        {content:"Reschedual calls with Patrick John & Poland Teams", class:"Normal", type:"Meetings"},
        {content:"Check for flights", class:"Normal", type:"Vacation"}
    ]
    
    return (
        <div className="container-inbox">
            <h1>Today <span style={{fontSize:15,color:"grey"}}>Fri Feb 3</span></h1> 
            <div>
                {mockUpData.map((item,index)=>{
                    return (<TodoItem item={item}/>)
                })}
            </div>
        </div>
    )
}

export default Inbox;