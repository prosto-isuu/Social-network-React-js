import React, {useEffect, useState} from "react"
import axios from "axios";
import {connect} from "react-redux";
import {SetIsFetchingActionCreator} from "../redux/UsersReducers";
import Preloader from "../assets/images/preloader.gif";
import s from "../Profile/Profile.module.css";
import PreloaderComponents from "../command/Preloader/PreloaderComponents";


const ApiConnect = (props) => {
    const [data, setData] = useState([])
        useEffect(()=>{
            props.isFetchingDispatch(!false)
            axios.get("https://jsonplaceholder.typicode.com/users").then( response => {
                props.isFetchingDispatch(!true)
                setData(response.data)

            }).then(props)
        }, [])
    console.log(props)
    return(
        <div>
            {props.isFetchingArguments ? <PreloaderComponents /> : null}
            {data.map(obj =>{
                return <div>
                    {obj.name}
                </div>
            })}


        </div>
    )



}

const mapToState = (state) => {
    return{
        isFetchingArguments: state.Users.isFetching
    }
}

const mapToDispatch = (dispatch) => {
    return{
        isFetchingDispatch: (isFetching) => {
            dispatch(SetIsFetchingActionCreator(isFetching))
        }
    }
}


export default connect(mapToState, mapToDispatch)(ApiConnect);