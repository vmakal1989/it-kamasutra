const ADD_DIALOG_MESSAGE = 'DIALOGS_ELEMENTS/ADD-DIALOG-MESSAGE';

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
    ]
};

const dialogsElementsReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            let message = {
                message: action.text
            };
            return {
                ...state,
                messages: [ ...state.messages, message],
            };
        }

        default:
            return state;
    }
};

const addMessage = (text) => ({type: ADD_DIALOG_MESSAGE, text});

export const addNewMessage = (data) => {
    return (dispatch) => {
        dispatch(addMessage(data.textarea))
    }
};

export default dialogsElementsReducer;