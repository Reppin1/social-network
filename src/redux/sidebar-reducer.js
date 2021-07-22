const initialState = {
  sidebarData: [
    {
      id: 1,
      name: 'Andrey',
      photo: 'https://klkfavorit.ru/wp-content/uploads/b/8/a/b8a99ca4c592b418cfa4d14b1c7d2b7b.jpeg',
    },
    {
      id: 2,
      name: 'Lena',
      photo: 'https://i.pinimg.com/736x/1a/94/9d/1a949d18c073273d967820cd5a99ad0b.jpg',
    },
    {
      id: 3,
      name: 'Denis',
      photo: 'https://klkfavorit.ru/wp-content/uploads/b/8/a/b8a99ca4c592b418cfa4d14b1c7d2b7b.jpeg',
    },
  ],
};

const sidebarReducer = (state = initialState) => state;

export { sidebarReducer };
