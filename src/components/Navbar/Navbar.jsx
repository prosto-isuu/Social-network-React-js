import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {FaUserCheck} from "react-icons/fa";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassname="active"><FaUserCheck/>Profile</NavLink></div>
                <div className={s.item}><NavLink to='/dialogs'><BiMessageDetail/>Messages</NavLink></div>
                <div className={s.item}><NavLink to='/users'><AiFillHome/>Outside</NavLink></div>
                <div className={s.item}><NavLink to='/users'><AiFillHome/>Outside</NavLink></div>
                <div className={s.item}><NavLink to='/users'><AiFillHome/>Outside</NavLink></div>
        </div>
    )
}
export default Navbar;
