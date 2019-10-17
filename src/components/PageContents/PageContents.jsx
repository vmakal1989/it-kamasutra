import React from 'react';
import style from './PageContents.module.css';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost';

const PageContents = (props) => {
  return (
    <div className={style.content}>
      <NewPost />
      <div>
        <div>
          <MyPosts posts={props.posts}/>
        </div>
      </div>
    </div>  
    )
    }
    
export default PageContents;