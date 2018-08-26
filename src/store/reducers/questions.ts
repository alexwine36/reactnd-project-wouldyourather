export enum QuestionActionType {
  ReceiveQuestions,
  AddQuestion,
  AnswerQuestion,
}

export interface Question {
  id: string;
  author: string;
  timestamp: string;
  optionOne: any;
  optionTwo: any;
}

export interface QuestionAnswer {
  author: string;
  qid: string;
  answer: string;
}

export interface Questions {
  [s: string]: Question;
}

interface Action {
  type: QuestionActionType;
  answer?: QuestionAnswer;
  question?: Question;
  questions?: Questions;
}

export default (state: Questions = {}, action: Action) => {
  switch (action.type) {
    case QuestionActionType.ReceiveQuestions:
      return {
        ...state,
        ...action.questions,
      };
    case QuestionActionType.AddQuestion:
      if (action.question) {
        return {
          ...state,
          [action.question.id]: action.question,
        };
      }
      return state;
    case QuestionActionType.AnswerQuestion:
      const { answer } = action;
      if (answer) {
        const question = {
          [answer.qid]: {
            ...state[answer.qid],
            ...{
              [answer.answer]: {
                ...state[answer.qid][answer.answer],
                votes: state[answer.qid][answer.answer].votes.concat(
                  answer.author
                ),
              },
            },
          },
        };
        return {
          ...state,
          ...question,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
