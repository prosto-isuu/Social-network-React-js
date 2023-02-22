import Header from "./Header";
import {AuthVerification} from "../../redux/auth-reducer";
import {connect} from "react-redux";


const HeaderContainer = (props) => {
    return(
        <>
            <Header auth={props.Auth} />
        </>
    )
}
const mapToStateToProps = (state) => {
    return{
        Auth: state.Auth.isAuth
    }
}


export default connect(mapToStateToProps, {AuthVerification})(HeaderContainer);