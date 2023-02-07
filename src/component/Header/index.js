import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const Header = ({navListRef,setPopUpSetting,popUpSetting,openAddTodoItemPopUpWindow,mainRef}) => {

    const listIcon_click = () => {
        if(!navListRef.current.classList.contains('addWidth')){
            navListRef.current.classList.add('addWidth')
        }else{
            navListRef.current.classList.remove('addWidth')
        }
    }

    const openAddTodoItemWindow = (e) => {
        mainRef.current.style.backgroundColor = "rgba(0,0,0,0.2)"
        openAddTodoItemPopUpWindow();
    }


    return(
        <div className="container-header">
            <div className = "container-leftIcons">
                <ul className="ul-left">
                    <li><FontAwesomeIcon icon={faBars} style={{width:25, height:25, cursor:"pointer",color:"white"}} onClick={listIcon_click}/></li>
                    <Link to="/home" rel="noreferrer">
                        <li><FontAwesomeIcon icon={faHome} style={{width:25, height:25,color:"white"}}/></li>                    
                    </Link>
                    <li>
                        <div className="searchBar">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{width:23, height:23, marginRight:5, color:"white"}}/>
                            <input type="text" className="input-search"></input>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="container-rightIcons">
                {/* <FontAwesomeIcon icon={faPlus} style={{width:25, height:25, cursor:"pointer",color:"white"}} onClick={(e)=>openAddTodoItemWindow(e)}/> */}
                <FontAwesomeIcon className="faUser" icon={faUser} style={{width:25, height:25,color:"white"}} onClick={()=>setPopUpSetting(!popUpSetting)}/>
            </div>
        </div>
    )
}

export default Header;

