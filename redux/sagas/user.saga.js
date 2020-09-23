import { put, takeLatest, call } from 'redux-saga/effects';
import {
  requestUserData,
  successUserData,
  failureUserData,
} from '../ducks/user.duck';

function* getUserData({ payload }) {
  try {
    const response = yield call(auth.getUserData, payload.email);
    yield put(successUserData(response.data));
  } catch (error) {
    yield put(failureUserData(error));
  }
}

function* watchAuthAsync() {
  yield takeLatest(requestUserData, getUserData);
}

export default watchAuthAsync;