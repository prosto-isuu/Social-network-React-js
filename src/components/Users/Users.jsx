// import {followACR, setUsersActionCreator, unfollowACR} from "../redux/UsersReducers";
// import {connect} from "react-redux";
// import React from 'react'
// import s from './Users.module.css'
// import axios from "axios";
// import UserPhoto from '../assets/images/dogStyle.jpeg'
// //
// class Users extends React.Component{
//
//     componentDidMount() {
//
//     }
//         //
//     onChanged = (pageNumber) => {
//     this.props.setCurrentPage(pageNumber)
// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.pageNumber}&count=${this.props.PageSize}`).then( response => response => {
// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.pageNumber}&count=${this.props.PageSize}`).then( response => response => {
// //             this.props.setUser(response.date.items)
//         })
// }
//
//     render() {
//         let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
//         let pages = []
//         for (let i = 0; i <= pagesCount; i++) {
//             pages.push(i);
//         return <div>
//             <div>
//         {pages.map(i => {
//             return <span className={this.props.CurrentPage === s.selectedPage}
//              onClick={() => {this.onChanged(i)}>{i}</span>
//         })}
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//             </div>
//             const mappingUser = this.props.Users.users.map(i => {
//             <div className={s.usersBlock}>
//             <div className={s.imgBlock}>
//             <div><img src={UserPhoto}/></div>
//             <div>{i.followed ?
//             <button onClick={() => {
//             this.props.Followed(i.id)
//         }
//         }>Подписаться</button>
//             :
//             <button onClick={() => {
//             this.props.Unfollowed(i.id)
//         }
//         }>Отписаться</button>}</div>
//             </div>
//             <div className={s.userAndStatus}>
//             <div className={s.usersRegion}>
//             <div className={s.name}>{`Имя: ${i.fullName}`}</div>
//             <div>Регион Город:</div>
//             </div>
//             <div className={s.usersStatus}>Статус:{i.status}</div>
//             </div>
//             </div>
//         }
//             <div>
//         {mappingUser}
//             <button onClick={() => {this.props.callAlert()}}>Call alert
//             </button>
//             </div>
//             </div>
//         }};



import {setCurrentPageActionCreator} from "../redux/UsersReducers";

const mapToState = (state) => {
    return {
        Users: state.Users.users,
        PageSize: state.Users.pageSize,
        totalCount: state.Users.totalCount,
        CurrentPage: state.Users.CurrentPage,
    }
}


const mapToDispatchProps = (dispatch) => {
    return {
        Followed: (userId) => {
            dispatch(followACR(userId))
        },
        Unfollowed: (userId) => {
            dispatch(unfollowACR(userId))
        },
        setUser: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(pageNumber(setCurrentPageActionCreator))
        }
    }}

const UsersContainer = connect(mapToState, mapToDispatchProps)(Users)
export default UsersContainer;
