import {combineReducers, createStore} from "redux";
import postsReducer from "./pageContentsReducers/posts-reducer";
import dialogsElementsReducer from "./pageContentsReducers/dialogsElements-reducer";
import topFriendsReducer from "./topFriends-reducer";
import usersReducer from "./pageContentsReducers/users-reducer";
import userProfileReducer from "./pageContentsReducers/userProfile-reducer";
import authReducer from "./headerReducers/auth-reducer";

let reducers = combineReducers({
    pageContents: postsReducer,
    dialogsElements: dialogsElementsReducer,
    topFriends: topFriendsReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;


