// import { useEffect, useState } from "react"
// import { connect } from "react-redux"
// import { compose } from "redux"
// import axios from "axios"
// import Users from "./Users"
// import {unfollow, follow} from '../../redux/users-reducers'
//
// const UsersContainer = (props) => {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
//             setUsers(response.data.data)
//         })
//     }, [])
//     return(
//         <Users users={users} {...props}/>
//     )
// }
//
// const mapToStateToProps = (state) => {
//     return{
//         // users: state
//     }
// }
//
// export default compose(
//     connect(mapToStateToProps,{unfollow, follow})
// )(UsersContainer);

import Users from "./Users";
import {useEffect, useState} from "react";
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";

const UsersContainer = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const response =  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                setUsers(response.data)
            }
        )
    }, [])
    return(
        <Users users={users}/>
    )
}

const mapToStateToProps = (state) => {
    return{

    }
}


export default compose(
    connect()
)(UsersContainer);