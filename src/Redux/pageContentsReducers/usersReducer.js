let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map( u => {
                    if(u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map( u => {
                    if(u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
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
        default:
            return state;
    }
};

export const followAC = (userID) => ({type: FOLLOW,  userID: userID});
export const unFollowAC = (userID) => ({type: UNFOLLOW,  userID: userID});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});




export default usersReducer;