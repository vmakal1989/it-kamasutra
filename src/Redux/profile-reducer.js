import {userProfileAPI} from "../api/api";

let SET_PROFILE = 'PROFILE/SET_PROFILE';
let SET_STATUS = 'PROFILE/SET_STATUS';
let UPDATE_STATUS = 'PROFILE/UPDATE_STATUS';
let PROFILE_PRELOADER_STATUS = 'PROFILE/PROFILE_PRELOADER_STATUS';
let SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    profile: null,
    profileStatus: 'No status',
    profilePreloaderStatus: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile};
        case SET_STATUS:
            return { ...state, profileStatus: action.status};
        case UPDATE_STATUS:
            return { ...state, profileStatus: action.status};
        case PROFILE_PRELOADER_STATUS:
            return { ...state, profilePreloaderStatus: action.status};
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state
    }

};

export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(profilePreloaderStatus(1));
        let data = await userProfileAPI.getUserProfile(userId);
        dispatch(setProfile(data));
        dispatch(profilePreloaderStatus(0))
        }
};

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let data = await userProfileAPI.getUserStatus(userId);
            dispatch(setProfileStatus(data));
        }
};

export const updateProfileStatus = (status) => {
    return async (dispatch) => {
        let data = await userProfileAPI.updateStatus(status);
            if (data.resultCode === 0) {
                dispatch(updateStatus(status))
            }
        }
};

export const addPhotoFile = (file) => {
    return async (dispatch) => {
        let data = await userProfileAPI.addPhoto(file);
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.photos));
        }
    }
};

export const sendProfileInfoForm = (formData) => {
    return async (dispatch, getState) => {
        let response = await userProfileAPI.sendProfileForm(formData);
        let userId = getState().auth.userId;
        debugger
        if (response.data.resultCode === 0) {
            dispatch(getProfile(userId));
        }
    }
};

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setProfileStatus = (status) => ({ type: SET_STATUS, status: status });
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status: status });
export const profilePreloaderStatus = (status) => ({ type: PROFILE_PRELOADER_STATUS, status: status });
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export default profileReducer;