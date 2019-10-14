import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={style.content}>
      <div>
        <div>
          <Post message='Hello, I am Vitali!' likes_counts='40' image='http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg"'/>
          <Post message='It is my first day programing on React!' likes_counts='56'/>
        </div>
      </div>
    </div>
  )
    }
    
export default MyPosts;