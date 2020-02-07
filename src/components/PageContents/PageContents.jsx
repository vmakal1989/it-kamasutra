import React from 'react';
import style from './PageContents.module.css';
import NewPostContainer from "./MyPosts/NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const PageContents = (props) => {
    return (
        <div className={style.content}>
            <NewPostContainer store={props.store}/>
            <div>
                <div>
                    <MyPostsContainer />
                </div>
            </div>
        </div>
    )
};
    
export default PageContents;