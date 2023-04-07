import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import { routesLinks } from '../../Routes/routes';
import MyButton from "../UI/Button/MyButton";

const Sidebar = () => {
        return (
            <nav className={style.sidebar}>
                <div className={style.sidebarHeader}>
                    <img
                        className={style.profilePhoto}
                        src="https://i.pinimg.com/236x/a6/b6/3d/a6b63de52d3b7bfa163a01c3f3c7b80f.jpg"
                        alt=""
                    />
                    <p>Islam Tashtanbekov</p>
                </div>
                <div
                    className={style.sidebarNav}
                >
                    {routesLinks.map((link) => {
                        return (
                            <MyButton>
                            <NavLink
                                className={style.link}
                                to={link.path}
                            >
                                {link.title}
                                <link.children />
                            </NavLink>
                            </MyButton>
                        );
                    })}
                </div>
            </nav>
        );
    };


export default Sidebar;
