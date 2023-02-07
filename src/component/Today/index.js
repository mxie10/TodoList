import React from 'react';
import './style.css'

export const Today = ({navListRef}) => {
    return (
        <div className = "container-today">
            <div className="todo-items-container">
                <h1>Today <span style={{fontSize:15,color:"grey"}}>Fri Feb 3</span></h1> 
            </div>
        
    </div>
    )
}

export default Today;