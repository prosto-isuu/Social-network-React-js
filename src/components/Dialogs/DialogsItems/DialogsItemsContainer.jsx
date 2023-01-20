import {sendMessageCreator, updateNewMessageBody} from "../../redux/DialogsReducer";
import {DialogsItem} from "./DialogsItem";
import {actionCretor} from "../../redux/store";
import {connect} from "react-redux";
let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}
let mapDispatch = (dispatch) => {
    return {
        updateNewMessageBody: () => {},
        mappingUser: () => {},
        addUser: (dispatch) => {
            dispatch(actionCretor())
        }
    }
}

const DialogsItemsContainer = connect(mapStateToProps, mapDispatch)(DialogsItem)

export default DialogsItemsContainer;
