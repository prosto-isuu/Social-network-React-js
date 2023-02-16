import React from 'react'
import s from './Header.module.css'

function Header(props) {
    return (
        <div className={s.header}>
            <div className={s.header_logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball_logo.png"/>
            </div>
            <div className={s.header_title}>
            </div>
            <div className={s.loginBlock}>
                {props.auth? <div><img src="https://finance.kz/static/images/default-avatar.png"/></div> : <h1>You aren`t verification</h1>}
            </div>
        </div>
    )
}
export default Header;