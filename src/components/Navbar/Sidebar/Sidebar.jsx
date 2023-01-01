import React from 'react'
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href='#'>Profile</a></div>
            <div className={s.item}><a href='#'>Profile</a></div>
            <div className={s.item}><a href='#'>Profile</a></div>
            <div className={s.item}><a href='#'>Profile</a></div>
        </nav>
    )
}

export default Sidebar;
