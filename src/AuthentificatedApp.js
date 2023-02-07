import React from 'react';
import './AuthentificatedApp.css';
import { useState, useRef, useCallback, useEffect } from 'react'
import { Route, Routes } from "react-router";
import AddTodoItemPopUpWindow from './component/AddTodoItemPopUpWindow/index'
import NavigationList from './component/NavigationList/index'
import Header from './component/Header/index'
import Home from './Screen/Home/index.js'
import Today from './component/Today/index.js'
import Inbox from './component/Inbox/index'
import DropdownList from './component/SettingMenu/index'

export const AuthentificatedApp = () => {

    const ref_navList = useRef(null)
    const ref_main = useRef(null)
    const [popUpAddItem, setPopUpAddItem] = useState(false)
    const [popUpSetting, setPopUpSetting] = useState(false)

    const openAddTodoItemPopUpWindow = useCallback(() => {
        setPopUpAddItem(true);
    })

    return (
        <main ref={ref_main} className="container-main">
            <Header navListRef={ref_navList}
                openAddTodoItemPopUpWindow={openAddTodoItemPopUpWindow}
                setPopUpSetting={setPopUpSetting}
                popUpSetting={popUpSetting}
                mainRef={ref_main}
            />
            <NavigationList navListRef={ref_navList}/>
            <Routes>
                <Route path={"/home"} element={<Home navListRef={ref_navList}/>}>
                    <Route index element={<Inbox />} />
                    <Route path={"/home/inbox"} element={<Inbox mainRef={ref_main} openAddTodoItemPopUpWindow = {openAddTodoItemPopUpWindow}/>} />
                    <Route path={"/home/today"} element={<Today />} />
                </Route>
                <Route path="/" element={<Home navListRef={ref_navList}/>}>
                    <Route index element={<Inbox mainRef={ref_main} openAddTodoItemPopUpWindow ={openAddTodoItemPopUpWindow}/> } />
                    </Route>
            </Routes>
            <DropdownList
                popUp={popUpSetting}
                setPopUpSetting={setPopUpSetting}
            />
        </main>
    )
}

export default AuthentificatedApp;