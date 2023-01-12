import s from './MusicHeader.module.css'

const arrForContent = [
    {id:1, name:'Hugo Boss'},
    {id:2, name:'Elena'},
    {id:3, name:'Diku'},
    {id:4, name:'Bruh'},
    {id:5, name:'Indigo'},
    {id:6, name:'Wolf'},
]
const dispatch ={
 setMap : arrForContent.map( i => {
    return <div id={i.id}>{i.name}</div>
})}

const actionAlertType = {
    type:'aletFunc',
    id:12
}

 export const MusicHeader = (props) => {
    return (
        <div className={s.header}>
            <ul className={s.list}>
                <li>
                    <button onClick={console.log(props.dispatch(actionAlertType))}>{console.log(props.dispatch) }Add message
                    </button>
                </li>
                <li><textarea name="" id="" cols="15" rows="1"></textarea></li>
                <li>
                    <button></button>
                </li>
                <li>
                    <input type="text"/>
                </li>
            </ul>
            <div className={s.setContent}>

            </div>
        </div>
    )
}


