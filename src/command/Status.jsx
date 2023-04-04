import React from 'react';
import {useState} from "react";
import MyInput from "../components/UI/Input/MyInput";

const Status = (props) => {
    const [editMode, setMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activeStatus = () => {
        setMode(true)
    }
    const deActiveStatus = () => {
        setMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                <span onDoubleClick={activeStatus}>
                    Status:{status || "Нету статуса"}
                </span>
                </div>
            }
            {
                editMode &&
                <div>
                <MyInput
                    placeholder={status || "Нету статуса"}
                    onBlur={deActiveStatus} autoFocus={true}
                    onChange={onStatusChange}
                />
                </div>
            }
        </div>
    );
};

export default Status;