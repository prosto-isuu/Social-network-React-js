import {usersAPI} from "../api/userApi";
import {AppStateType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk"; /*  Импортируем типы для thunk и dispatch*/

export type UserType = {
    name: string,
    id: number,
    photos: {
        small?: string | null,
        large?: string | null,
    }
    status: string,
    followed: boolean,
}

enum userActionType {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',
}

type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>,
}


let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

interface SetTotalUsersCountActionType {
    type: userActionType.SET_TOTAL_USERS_COUNT,
    count: number;
}

interface ToggleIsFetchingActionType {
    type: userActionType.TOGGLE_IS_FETCHING,
    isFetching: boolean;
}


interface ToggleIsFollowingProgressActionType {
    type: userActionType.TOGGLE_IS_FOLLOWING_PROGRESS;
    userId: number;
    isFetching: boolean;
}

interface FollowActionType {
    type: userActionType.FOLLOW,
    userId: number;
}

interface UnfollowActionType {
    type: userActionType.UNFOLLOW;
    userId: number;
}

interface SetUsersActionType {
    type: userActionType.SET_USERS,
    users: UserType[];
}

interface SetCurrentPageActionType {
    type: userActionType.SET_CURRENT_PAGE,
    currentPage: number;
}

type UsersActionType =

    FollowActionType |

    UnfollowActionType |

    SetUsersActionType |

    SetCurrentPageActionType |

    SetTotalUsersCountActionType |

    ToggleIsFetchingActionType |
    ToggleIsFollowingProgressActionType






const usersReducer = (state = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case userActionType.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case userActionType.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case userActionType.SET_USERS: {
            return {...state, users: action.users}
        }
        case userActionType.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case userActionType.SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case userActionType.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case userActionType.TOGGLE_IS_FOLLOWING_PROGRESS: {
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


export const followSuccess = (userId: string) => ({type: userActionType.FOLLOW, userId})
export const unfollowSuccess = (userId: string) => ({type: userActionType.UNFOLLOW, userId})
export const setUsers = (users) => ({type: userActionType.SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: userActionType.SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: userActionType.SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean) => ({type: userActionType.TOGGLE_IS_FETCHING, isFetching})


export const toggleFollowingProgress = (isFetching, userId) => ({
    type: userActionType.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

/* Здесь мы определяем глобальный тип как GetGlobalStateType - чтобы не дублировать код*/
type GetGlobalStateType = () => AppStateType;

/* А здесь мы определяем тип для Dispatch и внутри обобщение мы передаем actionы которые могут быть задиспатчены*/
type DispatchType = Dispatch<UsersActionType>

export const getUsers = (currentPage, pageSize): ThunkAction<Promise<void>, AppStateType, any, any> => {
    /*
    У thunk creator dispatch - есть два аргумента первый dispatch а второй getState который возвращает весь state целиком
      dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>,
      getState: () => State,
      extraArgument: ExtraThunkArg
    */
    return async (dispatch, getState) => {
        const response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        console.log(response)
        dispatch(setTotalUsersCount(response.totalCount))
        debugger;
    }
}
/* Отредактируй any и протипизируй его */
export const follow = (id: number): ThunkAction<Promise<void>, AppStateType, any, any> => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        const response: any = usersAPI.follow(id)
        if (response.resultCode === 0) {
            //@ts-ignore
            dispatch(followSuccess(id))
            dispatch(toggleFollowingProgress(false, id))
        }
    }
}
export const unSubscribe = (id): ThunkAction<Promise<void>, AppStateType, any, any> => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        const response: any = usersAPI.unfollow(id)
        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(id))
            dispatch(toggleFollowingProgress(false, id))
        }
    }
}

export default usersReducer;