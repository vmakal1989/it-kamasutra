import {authAPI} from "../api/api";
import {getProfile, getProfileStatus} from "./profile-reducer";

let SET_AUTH_DATA = 'AUTH/SET_AUTH_DATA';
let LOGIN_OUT_AUTH = 'AUTH/LOGIN_OUT_AUTH';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case LOGIN_OUT_AUTH:
            return {
                ...state,
                ...action.data,
                isAuth: false
            };
        default: {
            return state;
        }
    }
};

export const authMe = () => {
    return async (dispatch) => {
         let data = await authAPI.authME();
            if(data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthData(id, login, email));
                dispatch(getProfileStatus(id));
                dispatch(getProfile(id));
            }
        };
};


export const setAuthData =  (userId, login, email) => ({type: SET_AUTH_DATA, data: {userId, login, email}});
export const loginOutAuth = () => ({type: LOGIN_OUT_AUTH, data: {userId: null, login: null, email: null}});


export default authReducer;