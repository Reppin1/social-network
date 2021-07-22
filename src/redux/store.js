const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hey', likesCount: 0 },
        { id: 2, message: 'How are you?', likesCount: 23 },
        { id: 3, message: 'AKMDSLKASM', likesCount: 55 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: [
      {
        id: 1,
        name: 'Andrey',
        photo: 'https://klkfavorit.ru/wp-content/uploads/b/8/a/b8a99ca4c592b418cfa4d14b1c7d2b7b.jpeg',
      },
      { id: 2, name: 'Lena', photo: 'https://i.pinimg.com/736x/1a/94/9d/1a949d18c073273d967820cd5a99ad0b.jpg' },
      {
        id: 3,
        name: 'Denis',
        photo: 'https://klkfavorit.ru/wp-content/uploads/b/8/a/b8a99ca4c592b418cfa4d14b1c7d2b7b.jpeg',
      },
    ],
  },

  _callSubscriber() {

  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export { store };
