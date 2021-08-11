import { getAuthUsersData } from './header-reducer';

const initialState = {
  inicialized: false,
};

const TOGGLE_INICIALIZED = 'TOGGLE_INICIALIZED';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INICIALIZED: {
      return {
        ...state,
        inicialized: true,
      };
    }
    default:
      return state;
  }
};

export const inicializeSuccess = () => ({
  type: TOGGLE_INICIALIZED,
});

export const inicializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUsersData());
  promise.then(() => {
    dispatch(inicializeSuccess());
  });
};

export { appReducer };
