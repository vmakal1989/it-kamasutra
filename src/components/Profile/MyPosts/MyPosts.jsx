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
          <Post />
        </div>
      </div>
    </div>
  )
    }
    
export default MyPosts;