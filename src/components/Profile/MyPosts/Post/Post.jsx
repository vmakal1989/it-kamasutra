import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src={props.image}/>
      <div className={style.item}>
        <img src='https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png'/>
        {props.message}
      </div>
      <div>like {props.likes_counts}</div>
    </div>
  )
    }
    
export default Post;