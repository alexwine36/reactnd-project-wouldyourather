import { hideLoading, showLoading } from 'react-redux-loading';
import { Dispatch } from 'redux';
import { saveQuestion, saveQuestionAnswer } from '../../api';
import {
  Question,
  QuestionActionType,
  QuestionAnswer,
} from '../reducers/questions';
import { handleAddUserQuestion, handleUserAnswerQuestion } from './users';

export const receiveQuestions = (questions: Question[]) => {
  return {
    type: QuestionActionType.ReceiveQuestions,
    questions,
  };
};

const answerQuestion = (answer: QuestionAnswer) => {
  return {
    type: QuestionActionType.AnswerQuestion,
    answer,
  };
};

export const handleAnswerQuestion = (qid: string, answer: string) => {
  return (dispatch: Dispatch, getState: any) => {
    const { utils } = getState();

    dispatch(showLoading());
    console.info('RUN SAVE QUESTION');
    return saveQuestionAnswer({
      authedUser: utils.id,
      qid,
      answer,
    })
      .then(() => {
        dispatch(
          answerQuestion({
            qid,
            answer,
            author: utils.id,
          })
        );
        dispatch(
          handleUserAnswerQuestion({
            qid,
            uid: utils.id,
            value: answer,
          })
        );
      })
      .then(() => dispatch(hideLoading()));
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

// TODO find out why adding a new question is logging out user
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
      .then(question => {
        return [
          dispatch(addQuestion(question)),
          dispatch(
            handleAddUserQuestion({
              qid: question.id,
              uid: question.author,
            })
          ),
        ];
      })
      .then(() => dispatch(hideLoading()));
  };
};
