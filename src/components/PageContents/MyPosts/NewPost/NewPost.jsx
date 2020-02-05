import React from 'react';
import style from './NewPost.module.css';
import {addPostActionCreator, updateNewPostMessageActionCreate} from "../../../../Redux/pageContentsReducer";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        let action = updateNewPostMessageActionCreate(newText);
        props.dispatch(action);
    };

    return (
        <div className={style.newpost}>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
    )
}
    
export default NewPost;