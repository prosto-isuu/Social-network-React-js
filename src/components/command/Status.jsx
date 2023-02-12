import React from 'react';
import {useState} from "react";

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
        console.log(event.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                <span onDoubleClick={activeStatus}>
                    Status:{status}
                </span>
                </div>}
            {editMode && <div>
                <input placeholder={status || "-------"} onBlur={deActiveStatus} autoFocus={true} onChange={onStatusChange} />
            </div>}
        </div>
    );
};

export default Status;