import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
        {message:'It is my first day programing on React!', likes_counts: 56}
    ]

    let postsElements = posts.map ( p => <Post message={p.message}  likes_counts={p.likes_counts} image={p.image} />);

  return (
    <div className={style.content}>
      <div>
        <div>
            {postsElements}
        </div>
      </div>
    </div>
  )
    }
    
export default MyPosts;