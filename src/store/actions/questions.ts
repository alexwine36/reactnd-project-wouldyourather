import { Question, QuestionActionType } from '../reducers/questions';

export const receiveQuestions = (questions: Question[]) => {
  return {
    type: QuestionActionType.ReceiveQuestions,
    questions,
  };
};
