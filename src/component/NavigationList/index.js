import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const NavigationList = ({navListRef,mockUpData}) => {

    const [data, setData] = useState([])
    let navigate = useNavigate();

    const mainMenuList = [
        { name: "Home", icon: faHouseUser, nav: "/home/inbox" },
        { name: "Today", icon: faCalendarDays, nav: "/home/today" },
        { name: "Upcoming", icon: faCar },
        { name: "Filters & Labels", icon: faStar },
    ]

    useEffect(() => {
        setData(mockUpData)
    })

    return (
       <div className="nav-list-cotainer" ref={navListRef}>
                <div className="nav-list-main-item-container">
                    {mainMenuList.map((item, index) => {
                        return <div className="nav-list-main-item" key={item.name} onClick={() => navigate(item.nav)}>
                            <FontAwesomeIcon icon={item.icon} style={{width:25, height:25,color:"brown"}}/>
                            <span style={{ marginLeft: 10,fontWeight:'bold' }}>{item.name}</span>
                        </div>
                    })}
                </div>
            </div>
    )
}

export default NavigationList;