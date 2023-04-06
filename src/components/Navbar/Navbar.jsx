import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import { routesLinks } from '../../Routes/routes';

const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <div className={style.sidebarHeader}>Меню</div>
            <img
                src=""
                alt=""
            />
            <div className={style.sidebarNav}>
                {routesLinks.map((link) => {
                    return (
                        <NavLink className={style.link} to={link.path}>
                            {link.title}
                            <link.children />
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default Sidebar;
