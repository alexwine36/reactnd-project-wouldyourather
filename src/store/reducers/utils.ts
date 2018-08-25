export enum UtilActionType {
  Login,
  Logout,
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
