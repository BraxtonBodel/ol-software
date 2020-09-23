import { all } from 'redux-saga/effects';
import watchAuthAsync from './user.saga';

export default function* rootSaga() {
  yield all([watchAuthAsync()]);
}