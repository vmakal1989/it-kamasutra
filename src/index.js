import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, subscribe} from './Redux/state';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (store) => {
    ReactDOM.render(<BrowserRouter>
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewMessageText={store.updateNewMessageText.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
