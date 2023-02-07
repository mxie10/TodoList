import React from 'react';
import { useEffect, useState } from 'react'
import {Outlet } from "react-router-dom";
import './style.css'

export const Home = ({ navListRef, mockUpData }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(mockUpData)
    })

    return (
        <div className="container-home">
            <Outlet />
        </div>
    )
}
export default Home;
