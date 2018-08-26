import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';
import questions, { Questions } from './questions';
import users, { Users } from './users';
import utils, { Utils } from './utils';

export default combineReducers({
  users,
  utils,
  questions,
  loadingBar: loadingBarReducer,
});

export interface StoreState {
  users: Users;
  questions: Questions;
  utils: Utils;
}
