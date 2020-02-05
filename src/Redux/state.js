import pageContentsReducer from "./pageContentsReducer";
import dialogsElementsReducer from "./dialogsElementsReducer";

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

    dispatch(action) {
        this._state.pageContents = pageContentsReducer(this._state.pageContents, action);
        this._state.dialogsElements = dialogsElementsReducer(this._state.dialogsElements, action);

        this._callSubscriber(store);

    },
};
