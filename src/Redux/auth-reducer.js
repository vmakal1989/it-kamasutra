import {authAPI} from "../api/api";

let SET_AUTH_DATA = 'SET_AUTH_DATA';
let LOGIN_OUT_AUTH = 'LOGIN_OUT_AUTH';

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
    return (dispatch) => {
        return authAPI.authME()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthData(id, login, email))
                }
            });
    }
};


export const setAuthData =  (userId, login, email) => ({type: SET_AUTH_DATA, data: {userId, login, email}});
export const loginOutAuth = () => ({type: LOGIN_OUT_AUTH, data: {userId: null, login: null, email: null}});


export default authReducer;