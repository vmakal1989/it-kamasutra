import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    };

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);
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