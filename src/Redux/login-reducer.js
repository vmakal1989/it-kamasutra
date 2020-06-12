import {authAPI, loginAPI} from "../api/api";
import {loginOutAuth, setAuthData} from "./auth-reducer";
import {setProfile, updateStatus} from "./profile-reducer";
import {stopSubmit} from "redux-form";

let SET_LOGIN_DATE = 'LOGIN/SET_LOGIN_DATE';

let initialState = {
    loginDate: {}
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATE:
            return {...state, ...action.loginDate};
        default:
            return state
    }
};

export const sendLoginData = (loginData) => {
    return async (dispatch) => {
        let data = await loginAPI.getLoginData(loginData);
                if (data.resultCode === 0 ) {
                    let data = await authAPI.authME();
                        if(data.resultCode === 0) {
                            let {id, login, email} = data.data;
                            dispatch(setAuthData(id, login, email));
                            dispatch(setLoginDate(data));
                        }
                    }
                 else {
                    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                    dispatch(stopSubmit('login', {_error: message}))
                }
            }
};

export const loginOut = () => {
    return async (dispatch) => {
        let data = await loginAPI.loginOut()
            if(data.resultCode === 0) {
                dispatch(loginOutAuth());
                dispatch(setProfile(null));
                dispatch(updateStatus( 'No status'));

            }
        }
};

const setLoginDate = (loginDate) => ({type: SET_LOGIN_DATE, loginDate});

export default loginReducer;