import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postsReducer from "./pageContentsReducers/posts-reducer";
import dialogsElementsReducer from "./pageContentsReducers/dialogsElements-reducer";
import topFriendsReducer from "./topFriends-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./pageContentsReducers/users-reducer";
import userProfileReducer from "./pageContentsReducers/userProfile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profile-reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    pageContents: postsReducer,
    dialogsElements: dialogsElementsReducer,
    topFriends: topFriendsReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer,
    login: loginReducer,
    auth: authReducer,
    profile: profileReducer,
    form: formReducer,
    app: appReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
