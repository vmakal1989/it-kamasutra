import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg" />
      </div>
      <div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
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
        </div>
      </div>
    </div>  
    )
    }
    
export default Profile;