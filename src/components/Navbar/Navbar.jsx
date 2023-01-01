import React from 'react'
import s from './Navbar.module.css'
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <Sidebar/>
        </div>
    )
}

export default Navbar;
