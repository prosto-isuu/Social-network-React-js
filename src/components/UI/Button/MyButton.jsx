import React from 'react';
import styles from './MyButton.module.css'

const MyButton = ({props, children, onClick}) => {
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