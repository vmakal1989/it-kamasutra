import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsDate = [
        {message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
        {message:'It is my first day programing on React!', likes_counts: 56}
    ]
  return (
    <div className={style.content}>
      <div>
        <div>
            <Post message={ postsDate[0].message} like_counts={postsDate[0].likes_counts} image={postsDate[0].image}/>
            <Post message={ postsDate[1].message} like_counts={postsDate[1].likes_counts}/>
        </div>
      </div>
    </div>
  )
    }
    
export default MyPosts;