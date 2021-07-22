const initialState = {
  posts: [
    { id: 1, message: 'Hey', likesCount: 0 },
    { id: 2, message: 'How are you?', likesCount: 23 },
    { id: 3, message: 'AKMDSLKASM', likesCount: 55 },
  ],
  newPostText: '',
};

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: state.posts.length + 1,
      message: state.newPostText.trim(),
      likesCount: 0,
    };
    if (newPost.message.length >= 1) {
      state.posts.push(newPost);
      state.newPostText = '';
    }
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
};

export const addPostActiveCreator = () => ({
  type: ADD_POST,
});

export const onPostChangeActiveCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export { profileReducer };
