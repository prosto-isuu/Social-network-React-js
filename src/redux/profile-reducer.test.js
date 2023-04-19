// import profileReducer, {addNewObj, addPostActionCreator, deletePost} from "./profile-reducer";
//
// let state = {
//     posts: [
//         {id: 1, message: 'Hi, how are you?', likesCount: 12},
//         {id: 2, message: 'It`s my first post', likesCount: 11},
//         {id: 3, message: 'Blabla', likesCount: 11},
//         {id: 4, message: 'Dada', likesCount: 11}
//     ],
//     obj: [0, 1, 2]
// };
// //
// it('new post should be added',  () => {
//     let action = addPostActionCreator("newPostText")
//     let newState = profileReducer(state, action);
//
//     expect(newState.posts.length).toBe(5);
// });

// it('should ', function () {
//     let action = addPostActionCreator("newPostText")
//     let newState = profileReducer(state, action);
//     expect(newState.posts[3].message).toBe("newPostText");
// });

// it('should add new obj', function () {
//     let action = addNewObj(4, 3, 3)
//     let newState = profileReducer(state, action)
//     expect(newState.obj.length).toBe(3)
// });
//
// it('should be after delete should decrement', function () {
//     let action = deletePost(1)
//     let newState = state
//     expect(newState.posts.length).toBe(3)
// });
