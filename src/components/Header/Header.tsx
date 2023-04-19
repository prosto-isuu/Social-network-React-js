import React from 'react'
// @ts-ignore
import style from './Header.module.scss'
import {FaUserSlash} from 'react-icons/fa';
import {CgLogIn} from 'react-icons/cg';
import {useSelector} from 'react-redux';
import {BsSearch} from 'react-icons/bs';
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
import {AppStateType} from "../../redux/store";


function Header() {

    const isAuth = useSelector((state:AppStateType) => state.Auth.IsAuth);

    return (
        <header
            className={style.header}
        >
            <div
                className={style.logo}
            >
                <img
                    src="https://i.ibb.co/bHVsX1d/2.png"
                    alt='логотип'
                />
            </div>
            <div
                className={style.search}
            >
                <MyInput
                    type="text"
                    placeholder='Искать на сайте...'
                />
                <MyButton
                >
                    Найти <BsSearch/>
                </MyButton>
            </div>
            <div
                className={style.checkAuth}
            >
                {isAuth
                    ? <MyButton><FaUserSlash/>Выйти</MyButton>
                    : <MyButton><CgLogIn/>Войти</MyButton>
                }
            </div>
        </header>
    )
}

export default Header;