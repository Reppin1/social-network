const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const CHANGE_TOTAL_COUNT = 'CHANGE-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
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
