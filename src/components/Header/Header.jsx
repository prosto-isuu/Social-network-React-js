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
        <header className={style.header}>
            <img
                src="https://i.pinimg.com/564x/dc/a8/0b/dca80b34c94c2f25089b98e08503121a.jpg"
                className={style.logo}
            />
            <div>
                <MyInput
                    placeholder='Искать на сайте...'
                />
                <MyButton>
                    Найти <BsSearch/>
                </MyButton>
            </div>
            <div
                className={style.checkAuth}>
                {isAuth
                    ? <MyButton><FaUserSlash/>Выйти</MyButton>
                    : <MyButton><CgLogIn/>Войти</MyButton>
                }
            </div>
        </header>
    )
}

export default Header;