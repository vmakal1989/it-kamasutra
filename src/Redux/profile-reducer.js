import {userProfileAPI} from "../api/api";

let SET_PROFILE = 'PROFILE/SET_PROFILE';
let SET_STATUS = 'PROFILE/SET_STATUS';
let UPDATE_STATUS = 'PROFILE/UPDATE_STATUS';

let initialState = {
    profile: null,
    profileStatus: 'No status'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile};
        case SET_STATUS:
            return { ...state, profileStatus: action.status};
        case UPDATE_STATUS:
            return { ...state, profileStatus: action.status};
        default:
            return state
    }

};

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await userProfileAPI.getUserProfile(userId)
        dispatch(setProfile(data));
        }
};

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let data = await userProfileAPI.getUserStatus(userId)
            dispatch(setProfileStatus(data));
        }
};

export const updateProfileStatus = (status) => {
    return async (dispatch) => {
        let data = await userProfileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(updateStatus(status))
            }
        }
};

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setProfileStatus = (status) => ({ type: SET_STATUS, status: status });
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status: status });

export default profileReducer;