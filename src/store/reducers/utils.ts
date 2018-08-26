export enum UtilActionType {
  Login,
  Logout,
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

    default:
      return state;
  }
};
