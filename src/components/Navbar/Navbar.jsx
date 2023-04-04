import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {routesLinks} from "../../Routes/routes";

const Navbar = (props) => {
    return (
        <div
            className={style.navbar}
        >
            <img
                src="https://media.sf-converter.com/get?__sig=hvqiaIKthU7MyU09icfC6A&__expires=1680590744&uri=https%3A%2F%2Fscontent-xsp1-3.cdninstagram.com%2Fv%2Ft51.2885-15%2F316798859_662581635325583_4176573942085132213_n.webp%3Fstp%3Ddst-jpg_e35%26_nc_ht%3Dscontent-xsp1-3.cdninstagram.com%26_nc_cat%3D111%26_nc_ohc%3DuiPAv78vNZ0AX8wRbZ6%26edm%3DAP_V10EBAAAA%26ccb%3D7-5%26oh%3D00_AfCaYqJ_a5m19ZqChIx4mFIaNLNTCm17tqyNiH0J9BryiQ%26oe%3D64313F99%26_nc_sid%3D4f375e"
                alt="profile-photos"
                className={style.userPhoto}
            />
            {
                routesLinks.map(link => {
                    return <NavLink
                            className={style.link}
                            to={link.path}
                        >
                            {link.title}
                            <link.children/>
                        </NavLink>
                })
            }
        </div>

    )
}
export default Navbar;
