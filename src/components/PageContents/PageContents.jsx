import React from 'react';
import style from './PageContents.module.css';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost';

const PageContents = () => {
  return (
    <div className={style.content}>
      <NewPost />
      <div>
        <div>
          <MyPosts />
        </div>
      </div>
    </div>  
    )
    }
    
export default PageContents;