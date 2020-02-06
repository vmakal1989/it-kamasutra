import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {


    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.postChange(newText);
    };

    return (
        <div className={style.newpost}>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
        </div>
    )
}
    
export default NewPost;