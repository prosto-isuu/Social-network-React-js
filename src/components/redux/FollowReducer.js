const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const defaultState = {
    isFollow: false
}
const FollowReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state, isFollow: action.payload
            }
        }
    }
}

export const FollowAc = (payload) => ({type:FOLLOW, payload})
export default FollowReducer;