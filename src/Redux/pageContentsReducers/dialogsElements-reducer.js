const ADD_DIALOG_MESSAGE = 'DIALOGS_ELEMENTS/ADD-DIALOG-MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'Vitali'},
        {id: '2', name: 'Slava'},
        {id: '3', name: 'Valera'}
    ],
    messages: [
        {id: '1', message: 'Hello My friend!'},
        {id: '2', message: 'I follow  for my dreams'},
        {id: '3', message: 'And they will be mine'},
    ]
};

const dialogsElementsReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            let message = {
                id: state.messages.length + 1,
                message: action.text
            };
            return {
                ...state,
                messages: [ ...state.messages, message ],
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