import React from "react";
import s from './Login.module.css'

const Login = (props) => {
    return<>
    <div className={s.verificationBlock}> 
        Please, if you are not logged in, please <span className={s.login}><a>login</a></span> or <span className={s.register}><a>register</a></span> 
    </div>
    </>
}

export default Login;