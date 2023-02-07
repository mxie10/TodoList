import {useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export const SettingMenue = ({popUp,setPopUpSetting}) => {

    const settingItem = [
        { name: "My Profile", icon: faUserDoctor },
        { name: "Edit Profile", icon: faPenToSquare },
        { name: "Inbox", icon: faInbox },
        { name: "Setting", icon: faGear },
        { name: "Helps", icon: faCircleQuestion }
    ]

    const ref_dropdownList = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
          if(!ref_dropdownList.current.contains(e.target)){
            setPopUpSetting(false);
          }      
        };
        document.addEventListener("mousedown", handler);
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
      });

    return (
        <div ref={ref_dropdownList} className= {popUp == true?"dropdown-menu-container active":"dropdown-menu-container inactive"}  >
            <div className="header">
                <h3>Todo List Setting</h3>
            </div>
            <div className="list-item-container">
                {settingItem.map((item, index) => {
                    return <div className="dropdownItem">
                        <FontAwesomeIcon className="icon-profile" icon={item.icon} style={{ width: 25, height: 25 }} />
                        <a>{item.name}</a>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SettingMenue;