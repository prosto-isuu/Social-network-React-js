import React from 'react';
import style from './MyTextarea.module.css'

const MyTextarea = ({children, props, onChange, ref}) => {
    return (
        <textarea
            ref={ref}
            onChange={onChange}
            {...props}
            className={style.myTextarea}
        >
            {children}
        </textarea>
    );
};

export default MyTextarea;