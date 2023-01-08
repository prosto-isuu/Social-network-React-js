import React from 'react'
import s from './Navbar.module.css'
import Sidebar from "./Sidebar/Sidebar";
import {SidebarFriends} from "./SidebarFriends/SidebarFriends";

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <Sidebar/>
            <SidebarFriends name={props.nameFriend}/>
            {/*<SidebarFriends name={name}/>*/}
            {/*<SidebarFriends name={name} />*/}

        </div>
    )
}

export default Navbar;
