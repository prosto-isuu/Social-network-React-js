import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";

class ProfileContainerAjax extends React.Component {
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                this.props.setUsers(response.data)
            })
    }

    render() {
        return <>
            <Profile></Profile>
        </>
    }
}

const MapToStateToProps = (state) => {
    return{
        Profile: state.Profile.profile
    }
}

const MapToDispatchToProps = (dispatch) => {
    return{
        setUsers: (profile) => {
            // dispatch((profile))
        }
    }
}


export default connect(MapToStateToProps, MapToDispatchToProps)(ProfileContainerAjax);