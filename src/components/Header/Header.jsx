import React from 'react'
import s from './Header.module.css'
import { FaUserSlash } from 'react-icons/fa';
import { CgLogIn } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';


function Header(props) {
    const isAuth = useSelector( state => state.Auth.IsAuth)
    return (
        <div className={s.header}>
            <div className={s.header_logo}>
                <div>
                <img src="https://www.coolgenerator.com/Data/Textdesign/202302/dbe453219c08d6a07dace8ad704bf198.png" className={s.img}/>
                </div>
                <div className={s.inputBlock}>
                    <div className={s.auth}>
                    <input type="text" placeholder="Search for something..." className={s.input}/>
                    <button className={s.searchBtn}><BsSearch/></button>
                    <div className={s.verificationExamination}>
                    {props.isAuth? <div><button className={s.btn}><FaUserSlash/></button></div> : <div><button>Login<CgLogIn/></button></div>}
                    </div>
                    </div>
                </div>
            </div>
            <div className={s.header_title}>
            </div>
            <div className={s.loginBlock}>
            </div>
        </div>
    )
}
export default Header;