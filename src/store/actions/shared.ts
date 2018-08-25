import { hideLoading, showLoading } from 'react-redux-loading';
import { Dispatch } from 'redux';
import { getInitialData } from '../../api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export const handleInitialData = () => {
  return (dispatch: Dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
};
