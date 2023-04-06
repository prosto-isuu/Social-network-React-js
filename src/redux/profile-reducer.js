import {profileAPI, usersAPI} from "../api/userApi";
import {PostsApi} from "../api/postsApi";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = "DELETE_POST";
const GET_NEW_OBJECT = "GET_NEW_OBJECT"
const SET_POSTS = "SET_POSTS"


let initialState = {
    posts: [
        {id: v1(), icon:'https://i.pinimg.com/564x/3f/90/4d/3f904df6be16845d5a1853ec24547675.jpg', likes:1, description:'Круто получилось', comments:[{}], },
        {id: v1(), icon:'https://i.pinimg.com/564x/3f/90/4d/3f904df6be16845d5a1853ec24547675.jpg', likes:2, description:'Круто получилось', comments:[{}], },
        {id: v1(), icon:'https://i.pinimg.com/564x/58/31/e2/5831e2dc2311ca78d7fc787bd188a27e.jpg', likes:3, description:'Круто получилось', comments:[{}], },
        {id: v1(), icon:'https://i.pinimg.com/564x/11/2c/c1/112cc179c8f93a5a918e63b2fd966bd5.jpg', likes:4, description:'Круто получилось', comments:[{}], },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: action.message,
                likesCount: 0,
                icon: action.icon,
                comments:[null]
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST : {
            return {
                ...state, posts: state.posts.filter( i => i.id != action.postId)
            }
        }
        case SET_POSTS : {
            return {
                ...state, posts: [...state.posts, ...action.payload]
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (message, icon) => ({type: ADD_POST, message, icon })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addNewObj = (obj) => ({type: GET_NEW_OBJECT, obj})
export const setPosts = (payload) => ({type: SET_POSTS, payload})

export const setUsers = () => {
    return async dispatch => {
        const response = await PostsApi.getPosts()
        dispatch(setPosts(response))
    }
}

export const getUserProfile = (id) => {
    return async dispatch => {
        const response = await profileAPI.getProfile(id);
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = id => {
    return async dispatch => {
        const response = await profileAPI.getStatus(id)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status) => async(dispatch) => {
    const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }};


export default profileReducer;