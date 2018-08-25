import { hideLoading, showLoading } from 'react-redux-loading';
import { Dispatch } from 'redux';
import { saveQuestion } from '../../api';
import { Question, QuestionActionType } from '../reducers/questions';

export const receiveQuestions = (questions: Question[]) => {
  return {
    type: QuestionActionType.ReceiveQuestions,
    questions,
  };
};

const addQuestion = (question: {
  id: string;
  author: string;
  optionOne: {
    text: string;
    votes: string[];
  };
  optionTwo: {
    text: string;
    votes: string[];
  };
  timestamp: string;
}) => {
  console.info(question);
  return {
    type: QuestionActionType.AddQuestion,
    question,
  };
};

export const handleAddQuestion = (
  optionOneText: string,
  optionTwoText: string
) => {
  return (dispatch: Dispatch, getState: any) => {
    const { utils } = getState();

    dispatch(showLoading());
    console.info('RUN SAVE QUESTION');
    return saveQuestion({
      author: utils.id,
      optionOneText,
      optionTwoText,
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};
