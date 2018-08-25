export enum QuestionActionType {
  ReceiveQuestions,
}

export interface Question {
  id: string;
  author: string;
  timestamp: string;
  optionOne: any;
  optionTwo: any;
}

export interface Questions {
  [s: string]: Question;
}

interface Action {
  type: QuestionActionType;
  question?: Question;
  questions?: Questions;
}

export default (state = {}, action: Action) => {
  switch (action.type) {
    case QuestionActionType.ReceiveQuestions:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
};
