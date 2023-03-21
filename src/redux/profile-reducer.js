import {profileAPI, usersAPI} from "../components/api/userApi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = "DELETE_POST";
const GET_NEW_OBJECT = "GET_NEW_OBJECT"
const SET_POSTS = "SET_POSTS"


let initialState = {
    posts: [
        {title:'Все будет отлично!', body:'Кчау', date:Date.now(), url:'https://i.pinimg.com/564x/b9/ff/e3/b9ffe394ca6fe47ca5373ed214e31f49.jpg'}
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                body:'Все будет Ок!',
                title: action.title,
                date:null,
                likesCount: 0,
                url:'https://i.pinimg.com/564x/48/8f/3e/488f3e3e85c9d9c13b86a155288bcf26.jpg',
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
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
                ...state, posts: [...state.posts, action.payload]
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
export const savePhotoSuccess = (photos) => ({type: SET_POSTS, photos})


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

export const savePhoto = (file) =>  async dispatch => {
    const response = await profileAPI.savePhoto()
    dispatch(setStatus(response.data))
}
export default profileReducer;