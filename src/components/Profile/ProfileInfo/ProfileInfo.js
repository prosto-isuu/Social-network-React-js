import React from 'react';
import Status from "../../command/Status";
import {compose} from "redux";
import {connect} from "react-redux";

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello</h1>
            <Status status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
};

export default ProfileInfo;