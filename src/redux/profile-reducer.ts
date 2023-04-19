import {profileAPI, usersAPI} from "../api/userApi";
import {PostsApi} from "../api/postsApi";
import {v1} from "uuid";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";

enum profileActionType {
    ADD_POST = "ADD_POST",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    SET_STATUS = "SET_STATUS",
    DELETE_POST = "DELETE_POST",
    SET_POSTS = "SET_POSTS",
}

interface PostsType {
    id: string;
    icon: string;
    likes: number;
    description: string;

}

interface initialStateType {
    posts: PostsType[];
    profile: null | object;
    status: string;
}

let initialState: initialStateType = {
    posts: [
        {
            id: v1(),
            icon: 'https://i.pinimg.com/564x/3f/90/4d/3f904df6be16845d5a1853ec24547675.jpg',
            likes: 1,
            description: 'Круто получилось',
        },
        {
            id: v1(),
            icon: 'https://i.pinimg.com/564x/3f/90/4d/3f904df6be16845d5a1853ec24547675.jpg',
            likes: 2,
            description: 'Круто получилось',
        },
        {
            id: v1(),
            icon: 'https://i.pinimg.com/564x/58/31/e2/5831e2dc2311ca78d7fc787bd188a27e.jpg',
            likes: 3,
            description: 'Круто получилось',
        },
        {
            id: v1(),
            icon: 'https://i.pinimg.com/564x/11/2c/c1/112cc179c8f93a5a918e63b2fd966bd5.jpg',
            likes: 4,
            description: 'Круто получилось',
        },
    ],
    profile: null,
    status: "",
};


type ActionType =
    setStatusActionType |
    addPostsActionType |
    SetProfileActionType |
    DeletePostActionType |
    SetPostsActionType

interface setStatusActionType {
    type: profileActionType.SET_STATUS;
    status: string;
}

interface addPostsActionType {
    type: profileActionType.ADD_POST;
    icon: string;
    message: string;

}

interface SetProfileActionType {
    type: profileActionType.SET_USER_PROFILE;
    profile: any;
}

interface DeletePostActionType {
    type: profileActionType.DELETE_POST;
    postId: string;
}

interface SetPostsActionType {
    type: profileActionType.SET_POSTS;
    posts: any;
}


const profileReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case profileActionType.ADD_POST: {
            let newPost = {
                id: v1(),
                icon: action.message,
                likes: 3,
                description: 'Круто получилось',
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case profileActionType.SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case profileActionType.SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case profileActionType.DELETE_POST : {
            return {
                ...state, posts: state.posts.filter(i => i.id != action.postId)
            }
        }
        case profileActionType.SET_POSTS : {
            return {
                ...state, posts: [...state.posts, ...action.posts]
            }
        }
        default:
            return state;
    }
}

type AddPostType =
    {
        type: profileActionType.ADD_POST,
        message: string,
        icon: string
    }
export const addPostActionCreator = (message, icon):AddPostType => ({type: profileActionType.ADD_POST, message, icon})
export const setUserProfile = (profile) => ({type: profileActionType.SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: profileActionType.SET_STATUS, status})
export const deletePost = (postId) => ({type: profileActionType.DELETE_POST, postId})
export const setPosts = (payload) => ({type: profileActionType.SET_POSTS, payload})

type GlobalState = AppStateType;
type ThunkType = ThunkAction<Promise<void>, GlobalState, any, any>

export const setUsers = ():ThunkType => {
    return async (dispatch) => {
        const response = await PostsApi.getPosts()
        dispatch(setPosts(response))
    }
}

export const getUserProfile = (id):ThunkType => {
    return async dispatch => {
        const response = await profileAPI.getProfile(id);
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (id):ThunkType => {
    return async dispatch => {
        const response = await profileAPI.getStatus(id)
        dispatch(setStatus(response.data));}
}

export const updateStatus = (status):ThunkType =>
    async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
    }
};


export default profileReducer;