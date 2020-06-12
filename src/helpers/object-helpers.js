export const updateObjectInArray = (state,action, followed) => {
    return {
        ...state,
        users: [...state.users].map( u => {
            if(u.id === action.userID) {
                return {...u, followed: followed}
            }
            return u;
        })
    };
};