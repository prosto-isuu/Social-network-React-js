import React, {FC} from 'react';
// @ts-ignore
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom';
import { routesLinks } from '../../Routes/routes';

const Sidebar:FC = () => {
        return (
            <nav className={style.sidebar}>
                <div
                    className={style.sidebarNav}
                >
                    {routesLinks.map((link) => {
                        return (
                            <NavLink
                                className={style.link}
                                to={link.path}
                            >
                                <link.children />
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        );
    };


export default Sidebar;
