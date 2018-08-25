export enum UserActionType {
  AddUser,
  ReceiveUser,
}

export interface User {
  id: string;
  name: string;
  avatarURL: string;
  questions: string[];
  answers: { [s: string]: string };
}
export interface Users {
  [s: string]: User;
}

interface Action {
  type: UserActionType;
  user?: User;
  // users?: { [s: string]: User };
  users?: Users;
}

export default (state = {}, action: Action) => {
  const { users, type } = action;
  switch (type) {
    case UserActionType.ReceiveUser:
      return {
        ...state,
        ...users,
      };
    // case UserActionType.AddUser:
    //   return [
    //     ...state,
    //     {
    //       user,
    //     },
    //   ];
    default:
      return state;
  }
};
