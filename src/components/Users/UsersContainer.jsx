import { connect } from "react-redux"
import { compose } from "redux"
import Users from "./Users"

const UsersContainer = (props) => {
    return(
        <Users/>
    )
}

const mapToStateToProps = (state) => {
    return{
        Users: state
    }
}

export default compose(
    connect(mapToStateToProps)
)(UsersContainer);