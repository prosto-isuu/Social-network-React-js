import Header from "./Header";
import { useEffect, useState} from "react";
import {AuthVerification} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import axios from 'axios'

const HeaderContainer = (props) => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.1/auth/me",
            {withCredentials: true})
            .then(
                response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        props.AuthVerification(id, login, email);
                    }
                }
            )
    }, [])
    return(
        <>
            <Header auth={props.Auth} />
        </>
    )
}
const mapToStateToProps = (state) => {
    return{
        Auth: state.Auth.isAuth
    }
}


export default connect(mapToStateToProps, {AuthVerification})(HeaderContainer);