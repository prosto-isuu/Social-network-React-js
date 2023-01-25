const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const defaultState = {
    users: [
        {
            id: 1,
            ƒøllowed: true,
            fullName: 'Billie Elish',
            status: 'От меня может что то требовать только, я сам!',
            location: {city: 'Bishkek', country: 'Kyrgyzstan'}
        },
        {
            id: 2,
            ƒøllowed: true,
            fullName: 'Dimych K',
            status: 'iiuuu',
            location: {city: 'Bishkek', country: 'Kyrgyzstan'}
        },
        {
            id: 3,
            ƒøllowed: false,
            fullName: 'Kamila K',
            status: 'Ouuu',
            location: {city: 'Bishkek', country: 'Kyrgyzstan'}
        },
        {
            id: 4,
            ƒøllowed: false,
            fullName: 'Kamila K',
            status: 'Ouuu',
            location: {city: 'Bishkek', country: 'Kyrgyzstan'}
        },
    ]
}

const initiialState = {
    users: [],
    pageSize : 5,
    totalUsersCounts: 0,
    CurrentPage:1,
    isFetching: true
}
const UsersReducers = (state = initiialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                    alert('Follow')
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    alert("Unfolloow?")
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, action.users]
            }
            alert("Users typing...")
        case SET_CURRENT_PAGE:
            return {
                ...state, CurrentPage: action.CurrentPage
            }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            console.log('Default')
            return state
    }
}


export const follow = (userId) => ({type: "FOLLOW", userId})
export const SetIsFetchingActionCreator = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const unfollow = (userId) => ({type: "UNFOLLOW", userId})

export const setUsers = users => ({ type: 'SET_USERS', users })
export const setCurrentPage = (currentPage) => ({type:"SET_CURRENT_PAGE", currentPage:currentPage})

export default UsersReducers;