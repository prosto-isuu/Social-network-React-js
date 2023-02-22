import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import axios from "axios"
import Users from "./Users"

const UsersContainer = (props) => {
    const [users, setUsers] = useState([])
    useEffect( () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                setUsers(response.data.items)
            }
        )
    }, [])
    return(
        <Users users={users}/>
    )
}

const mapToStateToProps = (state) => {
    return{
        users: state.Dialogs.dialogs
    }
}

export default compose(
    connect(mapToStateToProps)
)(UsersContainer);