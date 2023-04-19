import React, {ChangeEvent, FC, PropsWithChildren} from 'react';
// @ts-ignore
import styles from './MyButton.module.css'

type PropsType = {
    props?,
    children,
    onClick?: (event: React.MouseEvent) => void,
    onChange?: (event: React.ChangeEvent) => void
    onBlur?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

const MyButton:PropsWithChildren<FC<PropsType>> = (
    {props, children, onClick}
) => {
    return (
        <button
            className={styles.myButton}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    );
};

export default MyButton;