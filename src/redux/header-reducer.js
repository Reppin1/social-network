import { authAPI, usersAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_USER_INFO = 'SET-USER-INFO';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  info: '',
  myID: 18650,
};

const headerReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...actions.data,
        isAuth: true,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        info: actions.info,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (item) => ({
  type: SET_AUTH_USER_DATA,
  data: item,
});

export const setUserInfo = (info) => ({
  type: SET_USER_INFO,
  info,
});

export { headerReducer };

export const getAuthUsersData = () => (dispatch) => {
  authAPI.auth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
      const ID = data.data.id;
      usersAPI.getOneUser(ID).then((responses) => {
        dispatch(setUserInfo(responses.data));
      });
    }
  });
};
