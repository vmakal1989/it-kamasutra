import React from 'react';
import style from './PageContents.module.css';
import MyPosts from './MyPosts/MyPosts';
import NewPostContainer from "./MyPosts/NewPost/NewPostContainer";

const PageContents = (props) => {
    let state = props.store.getState();
    return (
        <div className={style.content}>
            <NewPostContainer store={props.store}/>
            <div>
                <div>
                    <MyPosts posts={state.pageContents.posts}/>
                </div>
            </div>
        </div>
    )
};
    
export default PageContents;