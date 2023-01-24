const defaultState = {
    alert:'',
    newPostText: "",
    myPosts: [
        {name:'Henry', message:'Hello world!', likesCount:1},
        {name:'Bind', message:'Hello world!', likesCount:1},
        {name:'Jake', message:'Hello world!', likesCount:1},
    ]
}
const ProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "alert":
        return {...state, alert: action.payload}
        default:
            return state
    }
}
export default ProfileReducer;
