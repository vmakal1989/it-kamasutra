import * as axios from "axios";
import {userProfileAPI} from "../../api/api";

let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    userProfile: null
};

const userProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile};
        default:
            return state
    }

};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        userProfileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export default userProfileReducer;