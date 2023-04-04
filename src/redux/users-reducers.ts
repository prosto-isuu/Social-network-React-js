import {usersAPI} from "../components/api/userApi";
import {UsersNestingType, UsersPhotosType, UsersType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';





type InitialStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<object>,

}



let initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export type InitialType = typeof initialState


const usersReducer = (state = initialState, action:any):InitialType => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

type AuthType = {
    type: typeof TOGGLE_IS_FETCHING,
    payload: AuthUserDataPayload
}

type AuthUserDataPayload = {
    id:''
}

let immutable:'e3e' = 'e3e'

type FollowSuccessType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId:number):FollowSuccessType => ({type: FOLLOW, userId })

type UnsubscribeSuccessType = {
    type: typeof UNFOLLOW
    userId:number
}
export const unfollowSuccess = (userId):UnsubscribeSuccessType => ({type: UNFOLLOW, userId })

type SetUsersType = {
    type:typeof SET_USERS
    users: Array<any>
}
export const setUsers = (users):SetUsersType => ({type: SET_USERS, users })

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage):SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage })

type SetTotalUsersCount = {
    type:typeof SET_TOTAL_USERS_COUNT
    count:number
}
export const setTotalUsersCount = (totalUsersCount):SetTotalUsersCount => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
export const toggleIsFetching = (isFetching):ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching })

type ToggleFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId:number

}
export const toggleFollowingProgress = (isFetching, userId):ToggleFollowingProgress => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId:number) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId:number) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;