import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost';

const Profile = () => {
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
    
export default Profile;