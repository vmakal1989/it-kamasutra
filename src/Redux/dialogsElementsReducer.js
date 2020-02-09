const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Vitali', id: '1'},
        {name: 'Slava', id: '2'},
        {name: 'Valera', id: '3'}
    ],
    messages: [
        {message: 'Hello My friend!'},
        {message: 'I follow  for my dreams'},
        {message: 'And they will be mine'},
    ],

    newMessageText: "hello"

};

const dialogsElementsReducer = (state = initialState , action) => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            let message = {
                message: state.newMessageText
            };
            let stateCopy = { ...state};
            stateCopy.messages = [ ...state.messages]
            stateCopy.messages.push(message);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_DIALOG_MESSAGE: {
            let stateCopy = { ...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_DIALOG_MESSAGE});
export const updateNewDialogMessageActionCreate = (newText) => ({type: UPDATE_NEW_DIALOG_MESSAGE,
    newText: newText})

export default dialogsElementsReducer;