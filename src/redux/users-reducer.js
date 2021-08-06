import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const CHANGE_TOTAL_COUNT = 'CHANGE-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_BUTTON_DISABLE = 'TOGGLE-BUTTON-DISABLE';

const initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  buttonDisable: [],
};

export const usersReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === actions.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === actions.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: actions.users };
    }
    case CHANGE_CURRENT_PAGE: {
      return { ...state, currentPage: actions.currentPage };
    }
    case CHANGE_TOTAL_COUNT: {
      return { ...state, totalUserCount: actions.countUsers };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: actions.fetching };
    }
    case TOGGLE_BUTTON_DISABLE: {
      return {
        ...state,
        buttonDisable: actions.buttonActions
          ? [...state.buttonDisable, actions.userId]
          : state.buttonDisable.filter((id) => id !== actions.userId),
      };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export const changeCurrentPageAC = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage: page,
});

export const onTotalUserCountAC = (countUsers) => ({
  type: CHANGE_TOTAL_COUNT,
  countUsers,
});

export const toggleIsFetchingAC = (fetching) => ({
  type: TOGGLE_IS_FETCHING,
  fetching,
});

export const toggleButtonDisableAC = (buttonActions, userId) => ({
  type: TOGGLE_BUTTON_DISABLE,
  buttonActions,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  dispatch(changeCurrentPageAC(currentPage));
  usersAPI.getUsers(currentPage, pageSize).then((response) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(response.data.items));
    dispatch(onTotalUserCountAC(response.data.totalCount));
  });
};

export const followOnUser = (userId) => (dispatch) => {
  dispatch(toggleButtonDisableAC(true, userId));
  usersAPI.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followAC(userId));
    }
    dispatch(toggleButtonDisableAC(false, userId));
  });
};

export const unfollowOnUser = (userId) => (dispatch) => {
  dispatch(toggleButtonDisableAC(true, userId));
  usersAPI.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowAC(userId));
    }
    dispatch(toggleButtonDisableAC(false, userId));
  });
};
