// import React from 'react';
// import {connect} from 'react-redux';
// import {follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow, toggleFollowingProgress} from '../../redux/users-reducer';
// import * as axios from 'axios';
// import Users from './Users';
// import Preloader from "../common/Preloader/Preloader";
// import {usersAPI} from "../../api/api";
// class UsersContainer extends React.Component {
//     componentDidMount() {
//         this.props.toggleIsFetching(true);
//         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(data.items);
//             this.props.setTotalUsersCount(data.totalCount);
//         });
//     }
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber);
//         this.props.toggleIsFetching(true);
//
//         users={this.props.users}
//         follow={this.props.follow}
//         unfollow={this.props.unfollow}
//         toggleFollowingProgress={this.props.toggleFollowingProgress}
//         followingInProgress={this.props.followingInProgress}}
//     let mapStateToProps = (state) => {
//         pageSize: state.usersPage.pageSize,
//             totalUsersCount: state.usersPage.totalUsersCount,
//             currentPage: state.usersPage.currentPage,
//             isFetching: state.usersPage.isFetching
//         isFetching: state.usersPage.isFetching,
//             followingInProgress: state.usersPage.followingInProgress
//     }
// }
//
// export default connect(mapStateToProps,
//     {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
// {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);