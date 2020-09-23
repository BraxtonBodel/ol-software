import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  fetching: false,
  message: '',
  error: false,
  success: false,
  data: [],
};

export const {
  requestUserData,
  successUserData,
  failureUserData,
} = createActions({
  REQUEST_USER_DATA: (email) => ({
    ...defaultState,
    fetching: true,
    email,
  }),
  SUCCESS_USER_DATA: (data) => ({
    fetching: false,
    success: true,
    data,
  }),
  FAILURE_USER_DATA: (message) => ({
    fetching: false,
    error: true,
    message,
  }),
});

const User = handleActions(
  {
    [requestUserData]: (
      draft,
      { payload: { fetching, message, error, success, data } }
    ) => {
      return {
        ...draft,
        fetching,
        message,
        error,
        success,
        data,
      };
    },
    [successUserData]: (draft, { payload: { fetching, success, data } }) => ({
      ...draft,
      fetching,
      success,
      data,
    }),
    [failureUserData]: (draft, { payload: { fetching, error, message } }) => ({
      ...draft,
      fetching,
      error,
      message,
    }),
  },
  defaultState
);

export default User;