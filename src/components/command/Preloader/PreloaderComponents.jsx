import s from "../../Profile/Profile.module.css";
import React from "react";
import Preloader from './../../assets/images/preloader.gif'

const PreloaderComponents = (props) => {
    return(
        <>
        <img src={Preloader} className={s.preloader}/>
        </>
    )
}

export default PreloaderComponents;