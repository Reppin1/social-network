import { statusAPI, usersAPI } from '../api/api';

const initialState = {
  posts: [
    { id: 1, message: 'Hey', likesCount: 0 },
    { id: 2, message: 'How are you?', likesCount: 23 },
    { id: 3, message: 'AKMDSLKASM', likesCount: 55 },
  ],
  profile: null,
  status: '',
};

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: action.values,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActiveCreator = (values) => ({
  type: ADD_POST,
  values,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
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

export const getStatus = (userID) => (dispatch) => {
  statusAPI.getStatus(userID).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  statusAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export { profileReducer };
