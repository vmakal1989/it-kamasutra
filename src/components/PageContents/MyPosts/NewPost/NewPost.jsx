import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {
  return (
    <div className={style.newpost}>
      New post
      <textarea></textarea>
    </div>
  )
    }
    
export default NewPost;