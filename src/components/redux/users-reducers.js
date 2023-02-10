// // const FOLLOW = "FOLLOW"
// // const UNFOLLOW = "UNFOLLOW"
// // const SET_USERS = 'SET_USERS'
// // const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
// // const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
// //
// // const defaultState = {
// //     users: [
// //         {
// //             id: 1,
// //             ƒøllowed: true,
// //             fullName: 'Billie Elish',
// //             status: 'От меня может что то требовать только, я сам!',
// //             location: {city: 'Bishkek', country: 'Kyrgyzstan'}
// //         },
// //         {
// //             id: 2,
// //             ƒøllowed: true,
// //             fullName: 'Dimych K',
// //             status: 'iiuuu',
// //             location: {city: 'Bishkek', country: 'Kyrgyzstan'}
// //         },
// //         {
// //             id: 3,
// //             ƒøllowed: false,
// //             fullName: 'Kamila K',
// //             status: 'Ouuu',
// //             location: {city: 'Bishkek', country: 'Kyrgyzstan'}
// //         },
// //         {
// //             id: 4,
// //             ƒøllowed: false,
// //             fullName: 'Kamila K',
// //             status: 'Ouuu',
// //             location: {city: 'Bishkek', country: 'Kyrgyzstan'}
// //         },
// //     ]
// // }
// //
// // // const initiialState = {
// // //     users: [],
// // //     pageSize : 5,
// // //     totalUsersCounts: 0,
// // //     CurrentPage:1,
// // //     isFetching: true
// // // }
// // // const UsersReducers = (state = initiialState, action) => {
// // //     switch (action.type) {
// // //         case "FOLLOW":
// // //             return {
// // //                 ...state, users: state.users.map( u => {
// // //                     if (u.id === action.userId) {
// // //                         return {...u, followed: true}
// // //                     }
// // //                     return u;
// // //                 })
// // //             }
// // //         case "UNFOLLOW":
// // //             return {
// // //                 ...state,
// // //                 users: state.users.map( u => {
// // //                     if (u.id === action.userId) {
// // //                         return {...u, followed: false}
// // //                     }
// // //                     return u;
// // //                 })
// // //             }
// // //         case SET_USERS:
// // //             return {
// // //                 ...state, users: [...state.users, action.users]
// // //             }
// // //             alert("Users typing...")
// // //         case SET_CURRENT_PAGE:
// // //             return {
// // //                 ...state, CurrentPage: action.CurrentPage
// // //             }
// // //         case TOGGLE_IS_FETCHING:{
// // //             return {...state, isFetching: action.isFetching}
// // //         }
// // //         default:
// // //             return state
// // //     }
// // // }
// // //
// // //
// // // export const follow = (userId) => ({type: "FOLLOW", userId})
// // // export const SetIsFetchingActionCreator = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
// // // export const unfollow = (userId) => ({type: "UNFOLLOW", userId})
// // //
// // // export const setUsers = users => ({ type: 'SET_USERS', users })
// // // export const setCurrentPage = (currentPage) => ({type:"SET_CURRENT_PAGE", currentPage:currentPage})
// // //
// // // export default UsersReducers;
// // //
// // //
// // // const FOLLOW = "FOLLOW"
// // // const UNFOLLOW = "UNFOLLOW"
// // // const SET_USERS = "SET_USERS"
// // // const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
// // // const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
// // //
// //
// // const UsersReducer = (state = defaultState, action) => {
// //     switch (action.type) {
// //         case FOLLOW : {
// //             return {
// //                 ...state, users: state.users.map(i => {
// //                     if (i.id === action.userId) {
// //                         return {...i, followed: true}
// //                     }
// //                     return i;
// //                 })
// //             }
// //         }
// //         case UNFOLLOW : {
// //             return {
// //                 ...state, users: state.users.map(i => {
// //                     if (i.id === action.userId) {
// //                         return {...i, followed: false}
// //                     }
// //                     return i;
// //                 })
// //             }
// //         }
// //
// //         case SET_USERS : {
// //             return {...state, users: [...state.users, ...action.users]}
// //             return { ...state, users: action.users }
// //         }
// //         case SET_CURRENT_PAGE : {
// //             return {...state, currentPage: action.currentPage}
// //         }
// //         case "SET_TOTAL_USERS_COUNT" : {
// //             return {...state, totalUsersCount: action.count}
// //         }
// //         default:
// //             return state
// //     }
// // }
// //
// // export const follow = (userId) => ({type:FOLLOW, userId})
// // export const unFollow = (userId) => ({type:UNFOLLOW, userId})
// // export const SetUsers = (users) => ({type:SET_USERS, users})
// // export const SetCurrentPage = (currentPage) => ({type:SET_USERS, currentPage})
// // export const SetTotalCount = (count) => ({type:SET_USERS, count})
// //
// // export default UsersReducer;
// const FOllOW = "FOllOW"
// const UNFOllOW = "UNFOllOW"
// const SET_USERS = 'SET_USERS';
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
//
// const defaultState = {
//     users: [],
//     PageSizE: 5,
//     totalUsersCount: 0,
//     currentPage:1,
//     isFetching: true,
//     followInProgress: []
// }
//
// const usersReducers = (state, action) => {
//     switch (action.type) {
//         case FOllOW : {
//             return {
//                 ...state,
//                 users: state.users.map( i => {
//                     if (i.id === action.userId) {
//                         return {...i, followed:true}
//                     }
//                 })
//             }}
//         case UNFOllOW : {
//             return {
//                 ...state,
//                 users: state.users.map( i => {
//                     if (i.id === action.userId) {
//                         return {...i, followed:false}
//                     }
//                 })
//             }
//
//         }
//         case TOGGLE_IS_FETCHING: {
//             return { ...state, isFetching: action.isFetching}
//         }
//         default:
//             return state
//
// }
//
