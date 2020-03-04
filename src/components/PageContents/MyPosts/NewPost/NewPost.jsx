import React from 'react';
import style from './NewPost.module.css';

const NewPost = (props) => {


    let addPost = () => {
        props.addPost();
    };

    let postChange = (e) => {
        let newText = e.target.value;
        props.postChange(newText);
    };

    return (
        <div className={style.newpost}>
            <div>
                <textarea onChange={postChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
    )
}
    
export default NewPost;