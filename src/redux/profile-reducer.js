import { usersAPI } from '../api/api';

const initialState = {
  posts: [
    { id: 1, message: 'Hey', likesCount: 0 },
    { id: 2, message: 'How are you?', likesCount: 23 },
    { id: 3, message: 'AKMDSLKASM', likesCount: 55 },
  ],
  newPostText: '',
  profile: null,
};

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: state.posts.length + 1,
      message: state.newPostText.trim(),
      likesCount: 0,
    };
    if (newPost.message.length >= 1) {
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    return {
      ...state,
      newPostText: action.newText,
    };
  } else if (action.type === SET_USER_PROFILE) {
    return { ...state, profile: action.profile };
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

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getOneUser = (userId) => (dispatch) => {
  usersAPI.getOneUser(userId)
    .then((response) => {
      dispatch(setUserProfile(response.data));
    });
};

export { profileReducer };
