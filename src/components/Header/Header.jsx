import React from 'react'
import s from'./Header.module.css'

function Header() {
    return(
        <div className={s.header}>
            <div className={s.header_logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball_logo.png"/>
            </div>
            <div className={s.header_title}>
                {/*Hello world*/}
            </div>
        </div>
    )
}

export default Header;