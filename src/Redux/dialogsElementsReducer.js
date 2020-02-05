const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';

const dialogsElementsReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            let message = {
                message: state.newMessageText
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_DIALOG_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_DIALOG_MESSAGE});
export const updateNewDialogMessageActionCreate = (newText) => ({type: UPDATE_NEW_DIALOG_MESSAGE,
    newText: newText})

export default dialogsElementsReducer;