import React, {FC, PropsWithChildren} from 'react';
// @ts-ignore
import style from './Loader.module.css'

const Loader:FC<PropsWithChildren> = (props) => {
    return (
        <div
            {...props}
            className={style.loader}
        >

        </div>
    );
};

export default Loader;