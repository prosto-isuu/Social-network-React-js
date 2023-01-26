import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../redux/ProfileReducer";
import ProfileContainer from "./Profile";

class ProfileContainerAjax extends React.Component {
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                this.props.setUsers(response.data)
            })
    }

    render() {
        return <>
            <ProfileContainer Users={this.props}/>
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
            dispatch(setUsersProfile(profile))
        }
    }
}


export default connect(MapToStateToProps, MapToDispatchToProps)(ProfileContainerAjax);