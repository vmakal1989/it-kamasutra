import React from 'react';
import style from './PageContents.module.css';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost';

const PageContents = (props) => {
  return (
    <div className={style.content}>
      <NewPost addPost={props.addPost}
               newPostText ={props.newPostText}
               updateNewPostText={props.updateNewPostText} />
      <div>
        <div>
          <MyPosts posts={props.posts}/>
        </div>
      </div>
    </div>  
    )
    }
    
export default PageContents;