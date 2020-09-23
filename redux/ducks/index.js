import { combineReducers } from 'redux';
import Login from './login.duck';
import User from './user.duck';

const reducers = combineReducers({
  Login,
  User,
});

export default reducers;