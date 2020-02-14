import {combineReducers, createStore} from "redux";
import postsReducer from "./pageContentsReducers/postsReducer";
import dialogsElementsReducer from "./pageContentsReducers/dialogsElementsReducer";
import topFriendsReducer from "./topFriendsReducer";
import usersReducer from "./pageContentsReducers/usersReducer";

let reducers = combineReducers({
    pageContents: postsReducer,
    dialogsElements: dialogsElementsReducer,
    topFriends: topFriendsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;

