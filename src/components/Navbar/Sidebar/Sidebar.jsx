import React from 'react'
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar";

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.activeNavlink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs'>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to='/news'>News</NavLink></div>
            <div className={s.item}><NavLink to='/music'>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings'>Settings</NavLink></div>
        </nav>
    )
}

export default Sidebar;
