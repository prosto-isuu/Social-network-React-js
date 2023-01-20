import React from 'react'

function ProfileInfo(props) {
    const ref = React.createRef()
    const onAddPosts = () => {
        // let text = ref.current.value
        // props.addPost(text)
        // ref={ref} value={onPostChange} onChange={onPostChange}
    }
    const onPostChange = () => {
        let text = ref.current.value
        props.postChange(text)
    }
    return (
        <div>
            {props.myPost}
            <textarea></textarea>
            <button onClick={props.addPost}></button>
        </div>
    )
}

export default ProfileInfo;