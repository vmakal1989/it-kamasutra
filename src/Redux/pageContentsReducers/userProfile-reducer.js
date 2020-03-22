import {userProfileAPI} from "../../api/api";

let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    userProfile: null,
    userStatus: null
};

const userProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile};
        case SET_USER_STATUS:
            return { ...state, userStatus: action.status};
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
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        userProfileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data));
            });
    }
};

export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status: status });

export default userProfileReducer;