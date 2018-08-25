import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import utils from './utils';

export default combineReducers({
  users,
  utils,
  questions,
  loadingBar: loadingBarReducer,
});
