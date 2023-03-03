const SET_NEW_COMMENT = "SET_NEW_COMMENT"

const defaultState = {
    comments:[
        {id: 1,  name:'Anonymous', body:'Козум!😍'},
    ]
}

export const commentReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_NEW_COMMENT: {
            return {
                ...state, comments: [...state.comments, action.payload]
            }
        }
        default:
            return state
    }
}


export const setNewComment = (payload) => ({type:SET_NEW_COMMENT, payload})