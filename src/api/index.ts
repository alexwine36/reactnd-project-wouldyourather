import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export interface AddQuestion {
  author: string;
  optionOneText: string;
  optionTwoText: string;
}

export function saveQuestion(
  question: AddQuestion
): Promise<{
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
}> {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answer: {
  authedUser: string;
  qid: string; // The id of the question that was answered
  answer: string; // The option the user selected either "optionOne" or "optionTwo"
}) {
  return _saveQuestionAnswer(answer);
}
