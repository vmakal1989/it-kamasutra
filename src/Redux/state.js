const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE= 'UPDATE-NEW-POST-MESSAGE';
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';

export const store = {
    _state: {
        dialogsElements: {
            dialogs: [
                {name: 'Vitali', id: '1'},
                {name: 'Slava', id: '2'},
                {name: 'Valera', id: '3'}
            ],
            messages: [
                {message: 'Hello My friend!'},
                {message: 'I follow  for my dreams'},
                {message: 'And they will be mine'},
            ],

            newMessageText: "hello"
        },
        pageContents: {
            posts: [
                {id: '1', message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
                {id: '2', message:'It is my first day programing on React!', likes_counts: 56}
            ],
            newPostText: 'It world'
        },

        topFriends: {
            friends: [
                {name: 'Slava', image: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'},
                {name: 'Vitali', image: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg'},
                {name: 'Kristina', image: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg'},
                {name: 'Slava', image: 'https://cs4.pikabu.ru/post_img/big/2015/09/12/8/1442062158_1123103519.jpg'}
            ]
        }

    },
    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { action: ADD-POST}
        if (action.type === ADD_POST) {
            let post = {
                id: 5,
                message: this._state.pageContents.newPostText,
                likes_counts: 0
            };
            this._state.pageContents.posts.push(post);
            this._state.pageContents.newPostText = '';
            this._callSubscriber(store);
        } else if ( action.type === UPDATE_NEW_POST_MESSAGE) {
            this._state.pageContents.newPostText = action.newText;
            this._callSubscriber(store);
        } else if (action.type === ADD_DIALOG_MESSAGE) {
            let message = {
                message: this._state.dialogsElements.newMessageText
            };
            this._state.dialogsElements.messages.push(message);
            this._state.dialogsElements.newMessageText = '';
            this._callSubscriber(store);
        } else if (action.type === UPDATE_NEW_DIALOG_MESSAGE) {
            this._state.dialogsElements.newMessageText = action.newText;
            this._callSubscriber(store);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostMessageActionCreate = (newText) => ({type: UPDATE_NEW_POST_MESSAGE,
                                                        newText: newText});
export const addMessageActionCreator = () => ({type: ADD_DIALOG_MESSAGE});
export const updateNewDialogMessageActionCreate = (newText) => ({type: UPDATE_NEW_DIALOG_MESSAGE,
    newText: newText})