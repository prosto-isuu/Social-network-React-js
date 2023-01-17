import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.activeNavlink}>Profile</NavLink>
                <div className={s.item}><NavLink to='/dialogs'>Dialogs</NavLink></div>
                <div className={s.item}><NavLink to='/news'>News</NavLink></div>
                <div className={s.item}><NavLink to='/music'>Music</NavLink></div>
                <div className={s.item}><NavLink to='/settings'>Settings</NavLink></div>
            </div>
        </div>
    )
}
export default Navbar;
