import React from 'react'
import style from './Header.module.css'
import {FaUserSlash} from 'react-icons/fa';
import {CgLogIn} from 'react-icons/cg';
import {useSelector} from 'react-redux';
import {BsSearch} from 'react-icons/bs';
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";


function Header() {

    const isAuth = useSelector(state => state.Auth.IsAuth);

    return (
        <div className={style.header}>
            <img
                src="https://i.ibb.co/RCzFrBG/1.png"
                className={style.logo}
            />
            <MyInput/>
            <MyButton>
                <BsSearch/>
            </MyButton>
            <div
                className={style.checkAuth}>
                {isAuth
                    ? <MyButton><FaUserSlash/>Entrance</MyButton>
                    : <MyButton><CgLogIn/>Login</MyButton>
                }
            </div>
        </div>
    )
}

export default Header;