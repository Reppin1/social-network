const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_USER_INFO = 'SET-USER-INFO';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  info: '1234567',
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
