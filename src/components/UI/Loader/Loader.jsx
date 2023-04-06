import React from 'react';
import style from './Loader.module.css'

const Loader = (props) => {
    return (
        <div
            {...props}
            className={style.loader}
        >

        </div>
    );
};

export default Loader;