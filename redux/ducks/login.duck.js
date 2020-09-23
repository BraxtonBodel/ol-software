import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  fetching: false,
  message: '',
  error: false,
  success: false,
  data: [],
};

export const { requestLogin, successLogin, failureLogin } = createActions({
  REQUEST_LOGIN: () => ({
    ...defaultState,
    fetching: true,
  }),
  SUCCESS_LOGIN: (data) => ({
    fetching: false,
    success: true,
    data,
  }),
  FAILURE_LOGIN: (message) => ({
    fetching: false,
    error: true,
    message,
  }),
});

const Login = handleActions(
  {
    [requestLogin]: (
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
    [successLogin]: (draft, { payload: { fetching, success, data } }) => ({
      ...draft,
      fetching,
      success,
      data,
    }),
    [failureLogin]: (draft, { payload: { fetching, error, message } }) => ({
      ...draft,
      fetching,
      error,
      message,
    }),
  },
  defaultState
);

export default Login;