import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './MyPosts/NewPost/NewPost'

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg" />
      </div>
      <div>
        <div>
          <MyPosts />
        </div>
      </div>
    </div>  
    )
    }
    
export default Profile;