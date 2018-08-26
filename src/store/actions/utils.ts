import { hideLoading, showLoading } from 'react-redux-loading';
import { Dispatch } from 'redux';
import { UtilActionType } from '../reducers/utils';

const handleLogin = (id: string) => {
  return {
    type: UtilActionType.Login,
    id,
  };
};

const logout = () => {
  return {
    type: UtilActionType.Logout,
  };
};

export const login = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(showLoading());
    dispatch(handleLogin(id));
    dispatch(hideLoading());
  };
};

export const handleLogout = () => {
  return (dispatch: Dispatch) => {
    dispatch(showLoading());
    dispatch(logout());
    dispatch(hideLoading());
  };
};
