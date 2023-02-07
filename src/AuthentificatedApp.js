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

    const closePopUpWindow = useCallback(() => {
        setPopUpAddItem(false);
    })

    return (
        <main ref={ref_main} className="container-main">
            <Header navListRef={ref_navList}
                openAddTodoItemPopUpWindow={openAddTodoItemPopUpWindow}
                setPopUpSetting={setPopUpSetting}
                popUpSetting={popUpSetting}
                mainRef={ref_main}
            />
            <NavigationList 
                navListRef={ref_navList}
            />
            <Routes>
                <Route path={"/home"} element={<Home navListRef={ref_navList}/>}>
                    <Route index element={<Inbox />} />
                    <Route path={"/home/inbox"} element={<Inbox />} />
                    <Route path={"/home/today"} element={<Today />} />
                </Route>
                <Route path="/" element={<Home navListRef={ref_navList}/>}>
                    <Route index element={<Inbox />} />
                </Route>
            </Routes>
            <AddTodoItemPopUpWindow
                popUp={popUpAddItem}
                closePopUpWindow={closePopUpWindow}
                mainRef={ref_main}>
                <h2>Add a new task</h2>
            </AddTodoItemPopUpWindow>
            <DropdownList
                popUp={popUpSetting}
                setPopUpSetting={setPopUpSetting}
            />
        </main>
    )
}

export default AuthentificatedApp;