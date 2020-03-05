import {combineReducers, createStore} from "redux";
import postsReducer from "./pageContentsReducers/postsReducer";
import dialogsElementsReducer from "./pageContentsReducers/dialogsElementsReducer";
import topFriendsReducer from "./topFriendsReducer";
import usersReducer from "./pageContentsReducers/usersReducer";
import userProfileReducer from "./pageContentsReducers/userProfileReducer";

let reducers = combineReducers({
    pageContents: postsReducer,
    dialogsElements: dialogsElementsReducer,
    topFriends: topFriendsReducer,
    usersPage: usersReducer,
    userProfile: userProfileReducer
});

let store = createStore(reducers);

export default store;

