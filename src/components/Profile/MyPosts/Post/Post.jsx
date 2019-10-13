import React from 'react';
import style from './Post.module.css';

const Post = () => {
  return (
    <div className={style.post}>
      <div className={style.item}>
        Post 1
      </div>
      <div className={style.item}>
        Post 2
      </div>
      <div className={style.item}>
        Post 3
      </div>
    </div>
  )
    }
    
export default Post;