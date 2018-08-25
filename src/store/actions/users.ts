import { User, UserActionType } from '../reducers/users';

export const receiveUsers = (users: User[]) => {
  return {
    type: UserActionType.ReceiveUser,
    users,
  };
};
