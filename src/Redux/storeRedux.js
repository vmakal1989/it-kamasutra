import {combineReducers, createStore} from "redux";
import pageContentsReducer from "./pageContentsReducer";
import dialogsElementsReducer from "./dialogsElementsReducer";
import topFriendsReducer from "./topFriendsReducer";

let reducers = combineReducers({
    pageContents: pageContentsReducer,
    dialogsElements: dialogsElementsReducer,
    topFriends: topFriendsReducer
});

let store = createStore(reducers);

export default store;

