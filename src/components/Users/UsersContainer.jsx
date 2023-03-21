import axios from "axios";
import React from "react";
import Users from "./Users";
import { compose } from "redux";
import { connect } from "react-redux";
import { follow } from "../../redux/users-reducers";
import { unfollow } from "../../redux/users-reducers";



const UsersContainer = (props) => {
    console.log(props)
    const [users, setUsers] = React.useState([])
    console.log(users)
    React.useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( result => {
            setUsers(result.data.items)
            console.log(result.data.items)
        })
    }, [])

    return(
        <div>
            <Users users={users} {...props} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        
    }
}



export default compose(
    connect(mapStateToProps, {follow, unfollow})
)(UsersContainer);