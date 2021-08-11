import { authAPI, captchaAPI, usersAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_USER_INFO = 'SET-USER-INFO';
const SET_CAPTCHA = 'SET-CAPTCHA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  info: '',
  urlCaptcha: null,
};

const headerReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...actions.payload,
        isAuth: actions.isAuth,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        info: actions.info,
      };
    }
    case SET_CAPTCHA: {
      return {
        ...state,
        urlCaptcha: actions.urlCaptcha,
      };
    }
    default:
      return state;
  }
};

export const setCaptcha = (urlCaptcha) => ({
  type: SET_CAPTCHA,
  urlCaptcha,
});

export const setAuthUserData = (item, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: item,
  isAuth,
});

export const setUserInfo = (info) => ({
  type: SET_USER_INFO,
  info,
});

export { headerReducer };

export const getAuthUsersData = () => (dispatch) => authAPI.auth().then((data) => {
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(data.data, true));
    const ID = data.data.id;
    usersAPI.getOneUser(ID).then((responses) => {
      dispatch(setUserInfo(responses.data));
    });
  }
});

export const loginn = (email, password, rememberMe, setStatus, captcha) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha).then((response) => {
    if (response.resultCode === 0) {
      dispatch(getAuthUsersData());
    } else {
      setStatus(response.messages);
    }
  });
};

export const getCaptcha = () => (dispatch) => {
  captchaAPI.getCaptcha().then((response) => {
    dispatch(setCaptcha(response.data.url));
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData({
        id: null,
        email: null,
        login: null,
        info: '',
        urlCaptcha: null,
      }, false));
    }
  });
};
