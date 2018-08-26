import {
  Container,
  // Heading
} from 'mabrg-ui';
import React from 'react';
import { connect } from 'react-redux';
import { AuthenticationCheck, QuestionView } from '../../atoms';
import { Question, Questions } from '../../store/reducers/questions';
import { User, Users } from '../../store/reducers/users';

const HomePage = (props: { user?: User; questions?: Questions }) => {
  console.info('PROPS', props);
  const { user, questions } = props;
  let unansweredQuestions: Question[] = [];
  let answeredQuestions: Question[] = [];

  if (user && questions) {
    const questArray = Object.keys(questions).map(k => questions[k]);
    const answeredArray = Object.keys(user.answers).map(k => k);
    answeredQuestions = questArray.filter(e => {
      return answeredArray.includes(e.id) && e;
    });
    const aqArray = answeredQuestions.map(e => e.id);
    unansweredQuestions = questArray.filter(e => {
      return !aqArray.includes(e.id) && e;
    });
    console.info(questArray, answeredQuestions, unansweredQuestions);
  }

  return (
    <Container>
      <AuthenticationCheck />
      <QuestionView
        answeredQuestions={answeredQuestions}
        unansweredQuestions={unansweredQuestions}
      />
    </Container>
  );
};

const mapStateToProps = (state: {
  questions: Questions;
  utils: {
    id?: string;
  };
  users: Users;
}) => {
  const user = state.utils.id && state.users[state.utils.id];

  return {
    user,
    questions: state.questions,
  };
};

export default connect(mapStateToProps)(HomePage);
