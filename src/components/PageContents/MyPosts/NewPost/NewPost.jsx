import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={style.newpost}>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
    )
}
    
export default NewPost;