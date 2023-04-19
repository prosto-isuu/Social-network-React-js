import React, {FC, PropsWithChildren} from 'react';
// @ts-ignore
import style from './MyTextarea.module.css';

type PropsType = {
    onChange: () => React.ChangeEvent<HTMLTextAreaElement>
}

const MyTextarea:FC<PropsWithChildren<PropsType>> = ({children, onChange,...props}) => {
    return (
        <textarea
            onChange={onChange}
            {...props}
            className={style.myTextarea}
        >
            {children}
        </textarea>
    );
};

export default MyTextarea;