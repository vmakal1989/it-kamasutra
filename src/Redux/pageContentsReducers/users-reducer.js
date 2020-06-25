import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../helpers/object-helpers";

let FOLLOW = 'USERS/FOLLOW';
let UNFOLLOW = 'USERS/UNFOLLOW';
let SET_USERS = 'USERS/SET_USERS';
let SET_USERS_TOTAL_COUNT = 'USERS/SET_USERS_TOTAL_COUNT';
let SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING';
let TOGGLE_IS_DISABLED = 'USERS/TOGGLE_IS_DISABLED';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isDisabled: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
           return updateObjectInArray(state, action, true);
        case UNFOLLOW:
           return updateObjectInArray(state, action, false);
        case SET_USERS:
            return { ...state,
                    users: action.users
            };
        case SET_USERS_TOTAL_COUNT:
            return { ...state,
                    totalCount: action.totalUsersCount
            };
        case SET_CURRENT_PAGE:
            return { ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_IS_FETCHING:
            return { ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_DISABLED:
            return { ...state,
                isDisabled: action.isDisabled ? [...state.isDisabled, action.userID]
                                              : [...state.isDisabled.filter(id => id !== action.userID)]
            };
        default:
            return state;
    }
};

export const followSuccess = (userID) => ({type: FOLLOW,  userID: userID});
export const unFollowSuccess = (userID) => ({type: UNFOLLOW,  userID: userID});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsDisabled = (isDisabled, userID) => ({type: TOGGLE_IS_DISABLED, isDisabled, userID});

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }
};

export const follow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userID, usersAPI.follow(userID), followSuccess);
    }
};

export const unFollow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userID, usersAPI.unFollow(userID), unFollowSuccess);
    }
};

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleIsDisabled(true, userID));
    let data = await apiMethod;
        if(data.resultCode === 0) {
            dispatch(actionCreator(userID))
        }
    dispatch(toggleIsDisabled(false, userID))
};


export default usersReducer;