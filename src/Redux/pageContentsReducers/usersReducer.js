let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SEND_USERS = 'SEND_USERS';

let initialState = {
    users: [{ id:1, followed: true,
              photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg',
              fullName: 'Vitali', title: 'Hello!', location: {country: 'Belarus', city: 'Zhodino'}},
            { id:2, followed: false,
                photoUrl: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg',
                fullName: 'Howard', title: 'Hello! my friend', location: {country: 'Ukraine', city: 'Kiev'}},
            { id:3, followed: true,
                photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg',
                fullName: 'Lorem', title: "I'm professional guide !", location: {country: 'Belarus', city: 'Minsk'}},
            { id:4, followed: true,
                photoUrl: 'https://cs4.pikabu.ru/post_img/big/2015/09/12/8/1442062158_1123103519.jpg',
                fullName: 'Sonia', title: 'I am photograph!', location: {country: 'Russia', city: 'Moscow'}}]
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
        case SEND_USERS:
            return state;
        default:
            return state;
    }
};

export const followAC = (userID) => ({type: FOLLOW,  userID: userID});

export const unFollowAC = (userID) => ({type: UNFOLLOW,  userID: userID});



export default usersReducer;