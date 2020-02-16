let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users: []
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
        default:
            return state;
    }
};

export const followAC = (userID) => ({type: FOLLOW,  userID: userID});

export const unFollowAC = (userID) => ({type: UNFOLLOW,  userID: userID});

export const setUsers = (users) => ({type: SET_USERS, users: users});



export default usersReducer;