import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {name: 'Vitali', id: '1'},
    {name: 'Slava', id: '2'},
    {name: 'Valera', id: '3'},
    {name: 'Kristina', id: '4'}
];

let messages = [
    {message: 'Hello My friend!'},
    {message: 'I follow  for my dreams'},
    {message: 'And they will be mine'},
];

let posts = [
    {message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
    {message:'It is my first day programing on React!', likes_counts: 56}
]

ReactDOM.render(<App  dateDialogs = {dialogs} dateMessages={messages} posts={posts}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
