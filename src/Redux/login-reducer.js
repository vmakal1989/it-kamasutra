import {authAPI, loginAPI} from "../api/api";
import {loginOutAuth, setAuthData} from "./auth-reducer";
import {getProfile, getProfileStatus, setProfile, updateStatus} from "./profile-reducer";
import {stopSubmit} from "redux-form";

let SET_LOGIN_DATE = 'LOGIN/SET_LOGIN_DATE';
let SET_CAPTCHA_IMAGE_URL = 'LOGIN/SET_CAPTCHA_IMAGE_URL';

let initialState = {
    loginDate: {},
    captchaImageUrl: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATE:
            return {...state, ...action.loginDate};
        case SET_CAPTCHA_IMAGE_URL:
            return {...state, captchaImageUrl: action.captchaImageUrl};
        default:
            return state
    }
};

export const sendLoginData = (loginData) => {
    return async (dispatch) => {
        let response = await loginAPI.getLoginData(loginData);
                if (response.resultCode === 0 ) {
                    let response = await authAPI.authME();
                        if(response.resultCode === 0) {
                            let {id, login, email} = response.data;
                            dispatch(getProfile(id));
                            dispatch(getProfileStatus(id));
                            dispatch(setAuthData(id, login, email));
                            dispatch(setLoginDate(response));
                        }
                } else if(response.resultCode === 10) {
                    let response = await loginAPI.captchaImageUrl();
                     dispatch(setCaptchaImageUrl(response.data.url))
                } else {
                    let message = response.messages.length > 0 ? response.messages[0] : "Some error";
                    dispatch(stopSubmit('login', {_error: message}))
                }
            }
};

export const loginOut = () => {
    return async (dispatch) => {
        let response = await loginAPI.loginOut();
            if(response.resultCode === 0) {
                dispatch(loginOutAuth());
                dispatch(setProfile(null));
                dispatch(updateStatus( 'No status'));

            }
        }
};

const setLoginDate = (loginDate) => ({type: SET_LOGIN_DATE, loginDate});
const setCaptchaImageUrl = (captchaImageUrl) => ({type:SET_CAPTCHA_IMAGE_URL, captchaImageUrl });

export default loginReducer;