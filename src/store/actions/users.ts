import {
  User,
  UserActionType,
  UserAnswerQuestion,
  UserNewQuestion,
} from '../reducers/users';

export const receiveUsers = (users: User[]) => {
  return {
    type: UserActionType.ReceiveUser,
    users,
  };
};

export const handleAddUserQuestion = (question: UserNewQuestion) => {
  return {
    type: UserActionType.AddQuestion,
    question,
  };
};

export const handleUserAnswerQuestion = (answer: UserAnswerQuestion) => {
  console.info('ANSWER QUESTION', answer);
  return {
    type: UserActionType.AddAnswer,
    answer,
  };
};
