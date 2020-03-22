import {loginAPI} from "../api/api";
import {setAuthData} from "./headerReducers/auth-reducer";

let SET_LOGIN_DATE = 'SET_LOGIN_DATE';

let initialState = {
    loginDate: {}
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATE:
            debugger
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
                    dispatch(setLoginDate(data))
                }
            })
    }
}

const setLoginDate = (loginDate) => ({type: SET_LOGIN_DATE, loginDate});

export default loginReducer;