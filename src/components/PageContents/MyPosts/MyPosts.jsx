import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map ( p => <Post key={p.id} message={p.message}  likes_counts={p.likes_counts} image={p.image} />);
  return (
    <div className={style.content}>
      <div>
        <div>
            {postsElements}
        </div>
      </div>
    </div>
  )
    };
    
export default MyPosts;