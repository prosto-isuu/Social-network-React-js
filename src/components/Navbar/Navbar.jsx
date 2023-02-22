import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {FaUserCheck} from "react-icons/fa";

const Navbar = (props) => {
    return (
        <>
        <div className={s.nav}>
        <div className={s.profilePhotosBlock}><img src="https://avatars.mds.yandex.net/get-afishanew/34116/23f200c3f237413557570a7ffcc0d8ba/orig" alt="profile-photos" /></div>
            <div className={s.item}><NavLink to='/profile' activeClassname="active"><FaUserCheck/>Ислам Таштанбеков</NavLink></div>
                <div className={s.item}><NavLink to='/dialogs'><BiMessageDetail/>Сообщение</NavLink></div>
                <div className={s.item}><NavLink to='/users'><AiFillHome/>Друзья</NavLink></div>
                <div className={s.item}><NavLink to='/new'><AiFillHome/>Лента</NavLink></div>

        </div>
        </>
    )
}
export default Navbar;
