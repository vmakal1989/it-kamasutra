import postsReducer, {addPost, deletePost} from "./posts-reducer";
import React from "react";


let state = {
    posts: [
        {id: '1', message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
        {id: '2', message:'It is my first day programing on React!', likes_counts: 56}
    ]
};


it('message should be added to post', () => {
    let action = addPost('test text');

    let newState = postsReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new post text should be correct', () => {
    let action = addPost('test text');

    let newState = postsReducer(state, action);

    expect(newState.posts[2].message).toBe('test text');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = postsReducer(state, action);

    expect(newState.posts.length).toBe(1);
});