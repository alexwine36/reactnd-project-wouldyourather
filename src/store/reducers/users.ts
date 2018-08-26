export enum UserActionType {
  AddUser,
  ReceiveUser,
  AddQuestion,
  AddAnswer,
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

export interface UserNewQuestion {
  qid: string;
  uid: string;
}
export interface UserAnswerQuestion {
  uid: string;
  qid: string;
  value: string;
}

interface Action {
  type: UserActionType;
  user?: User;
  question?: UserNewQuestion;
  answer?: UserAnswerQuestion;
  // users?: { [s: string]: User };
  users?: Users;
}

export default (state: Users = {}, action: Action) => {
  const { users, type } = action;
  switch (type) {
    case UserActionType.ReceiveUser:
      return {
        ...state,
        ...users,
      };
    case UserActionType.AddQuestion:
      const { question } = action;
      if (question) {
        const user = {
          [question.uid]: {
            ...state[question.uid],
            questions: state[question.uid].questions.concat(question.qid),
          },
        };

        return {
          ...state,
          ...user,
        };
      }
      return state;
    case UserActionType.AddAnswer:
      const { answer } = action;
      if (answer) {
        const user = {
          [answer.uid]: {
            ...state[answer.uid],
            answers: {
              ...state[answer.uid].answers,
              [answer.qid]: answer.value,
            },
          },
        };
        console.info('USER', user);
        return {
          ...state,
          ...user,
        };
      }
      return state;
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
