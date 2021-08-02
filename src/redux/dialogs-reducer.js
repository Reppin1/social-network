const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  messagesData: [
    { id: 1, message: 'Hey' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'AMSDOS' },
  ],
  newMessageText: '',
  dialogData: [
    {
      id: 1,
      name: 'Andrey',
      photo: 'https://klkfavorit.ru/wp-content/uploads/b/8/a/b8a99ca4c592b418cfa4d14b1c7d2b7b.jpeg',
    },
    {
      id: 2,
      name: 'Denis',
      photo: 'https://i.pinimg.com/736x/1a/94/9d/1a949d18c073273d967820cd5a99ad0b.jpg',
    },
    {
      id: 3,
      name: 'Lena',
      photo: 'https://klkfavorit.ru/wp-content/uploads/b/8/a/b8a99ca4c592b418cfa4d14b1c7d2b7b.jpeg',
    },
    {
      id: 4,
      name: 'Dimas',
      photo: 'https://i.pinimg.com/736x/1a/94/9d/1a949d18c073273d967820cd5a99ad0b.jpg',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.dialogData.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: '',
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT:
      // eslint-disable-next-line no-case-declarations
      return {
        ...state,
        newMessageText: action.newMessage,
      };
    default:
      return state;
  }
};

export const onMessageChangeActiveCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export const addNewMessagesActiveCreator = () => ({
  type: ADD_MESSAGE,
});

export { dialogsReducer };
