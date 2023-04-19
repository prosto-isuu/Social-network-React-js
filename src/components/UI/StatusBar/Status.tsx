import React, {FC, PropsWithChildren} from 'react';
import {useState} from "react";
import MyInput from "../Input/MyInput";

type PropsType = {
    status: string | null
}

const Status:FC<PropsWithChildren<PropsType>> = ({status}) => {

    const [editMode, setMode] = useState(false)
    const activeStatus = () => {
        setMode(true)
    }
    const deActiveStatus = () => {
        setMode(false)
    }

    return (
        <div>
            {!editMode &&
                <span
                    onDoubleClick={activeStatus}>
                    Status:{status || "Нету статуса"}
                </span>
            }
            {
                editMode &&
                <MyInput
                    placeholder={status || "Нету статуса"}
                    onBlur={deActiveStatus}
                    // autoFocus={true}
                />
            }
        </div>
    );
};

export default Status;