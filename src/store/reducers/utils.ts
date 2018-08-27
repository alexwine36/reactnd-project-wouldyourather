export enum UtilActionType {
  Login = '@@utils/LOGIN',
  Logout = '@@utils/LOGOUT',
}

export interface Utils {
  id?: string;
}

interface Action {
  type: UtilActionType;
  id?: string;
}

export default (state = {}, action: Action) => {
  const { id, type } = action;
  switch (type) {
    case UtilActionType.Login:
      return {
        ...state,
        id,
      };
    case UtilActionType.Logout:
      return {
        state: {},
      };
    default:
      return state;
  }
};
