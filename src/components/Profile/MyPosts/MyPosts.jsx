import React from 'react';
import style from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style.content}>
      <div>
        My posts
        <div>
          <NewPost />
        </div>
        <div>
          <Post message='Hello, I am Vitali!' likes_counts='40'/>
          <Post message='It is my first day programing on React!' likes_counts='56'/>
        </div>
      </div>
    </div>
  )
    }
    
export default MyPosts;