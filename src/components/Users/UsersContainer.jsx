import {connect} from "react-redux";
import React from "react";
import axios from 'axios'
import Preloader from "../assets/images/preloader.gif"
import {follow, setCurrentPage, setUsers, unfollow} from "../redux/UsersReducers";
import Users from './Users'

class UsersContainer extends React.Component {
    componentDidMount() {
        // this.props(
        // axios.get("https://jsonplaceholder.typicode.com/users").then( i => {
        //     return i.data
        // }))
    }
    render() {
        return(<>
            <div>
                <Users/>
            <h1>Hello world</h1>
            </div>
            </>
        )
    }
}

const mapToState = (state) => {
    return {
        Users: state.Users.users,
        PageSize: state.Users.pageSize,
        totalCount: state.Users.totalCount,
        CurrentPage: state.Users.CurrentPage,
    }}
// }
// const mapToDispatchProps = (dispatch) => {
//     return {
//         Followed: (userId) => {
//             dispatch(follow(userId))
//         },
//         Unfollowed: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUser: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(pageNumber(setCurrentPage))
//         }
//     }}
export default connect(mapToState,
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    )(UsersContainer);
