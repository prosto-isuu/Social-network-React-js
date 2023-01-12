
let state = {
            addNewText: 'it',
            currentName: [
                {name: 'Anya', id: 1},
                {name: 'Matvey', id: 2},
                {name: 'Eminem', id: 3},
                {name: 'Clouse', id: 4},
                {name: 'Amanbai', id: 4},

            ],

            DialogsMessageArray:[
                {id: 1, message: 'What it is?'},
                {id: 2, message: 'When she is back?'},
                {id: 3, message: 'Where they`re going'},
                {id: 4, message: 'How old you'},],

            count:[
                {name:'No way', id:1},
                {name:'No way', id:1},
                {name:'No way', id:1},
                {name:'No way', id:1},],

            nameIsFriend : [
                {name:'Bilie'},
                {name:'Micle'},
                {name:'Whashington'},
                {name:'Amanbai'},],



         }
//

export const dispatch = (action) => {
    if (action.type = 'alertFunc') {
        alert('Func worked!')
    } else {
        alert('Not worked')
    }
}
//
// export let addPost =  (message) => {
//     let newMessage = {
//         id: 5, message:message,
//     };
//
//     state.DialogsMessageArray.push(newMessage);
// }

export default state;