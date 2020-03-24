import {authAPI, loginAPI} from "../api/api";
import {loginOutAuth, setAuthData} from "./headerReducers/auth-reducer";
import {setProfile, updateStatus} from "./profile-reducer";

let SET_LOGIN_DATE = 'SET_LOGIN_DATE';

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
    return (dispatch) => {
        loginAPI.getLoginData(loginData)
            .then(data => {
                if (data.resultCode === 0 ) {
                    authAPI.authME()
                        .then(data => {
                            if(data.resultCode === 0) {
                                let {id, login, email} = data.data;
                                dispatch(setAuthData(id, login, email));
                                dispatch(setLoginDate(data));
                            }
                        });
                }
            })
    }
};

export const loginOut = () => {
    return (dispatch) => {
        loginAPI.loginOut()
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(loginOutAuth());
                    dispatch(setProfile(null));
                    dispatch(updateStatus( 'No status'));

                }
            })
    }
};

const setLoginDate = (loginDate) => ({type: SET_LOGIN_DATE, loginDate});

export default loginReducer;