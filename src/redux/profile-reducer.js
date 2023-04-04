import {profileAPI, usersAPI} from "../api/userApi";
import {PostsApi} from "../api/postsApi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = "DELETE_POST";
const GET_NEW_OBJECT = "GET_NEW_OBJECT"
const SET_POSTS = "SET_POSTS"


let initialState = {
    posts: [
        {id:'v1', name:'Billie', },
        {id:'v1', name:'Billie', },
        {id:'v1', name:'Billie', },
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: "",
    obj: [1,2 ,3],
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        };
        case GET_NEW_OBJECT : {
            return {...state, obj: [action.obj]}
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


export const addPostActionCreator = () => ({type: ADD_POST})
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
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => async(dispatch) => {
    const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }};

export const getStatusFake =  (userId) =>  async dispatch => {
    const response = await profileAPI.fakeQuery(userId)
    dispatch(setStatus(response.data))
}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;