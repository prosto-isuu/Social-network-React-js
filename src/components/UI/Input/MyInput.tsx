import React, { ChangeEvent, FC, PropsWithChildren } from 'react';
//@ts-ignore
import style from './MyInput.module.css';

type PropsType = {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const MyInput: FC<PropsWithChildren<PropsType>> = ({ ...props }) => {
    return <input className={style.myInput} {...props} type="text" />;
};

export default MyInput;
