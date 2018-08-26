import React from 'react';
import { connect } from 'react-redux';
import { AuthenticationCheck, QuestionStats } from '../../atoms';
import { AnswerQuestionComponent } from '../../components';
import { StoreState } from '../../store/reducers';
import { Questions } from '../../store/reducers/questions';
import { User, Users } from '../../store/reducers/users';

const QuestionPage = (props: {
  match: {
    params: {
      question_id: string;
    };
  };
  users: Users;
  questions: Questions;
  user?: User;
}) => {
  const { question_id } = props.match.params;
  const { user } = props;
  const question = props.questions[question_id];
  let answered = false;
  if (props.user) {
    const { answers } = props.user;
    const answerArray = Object.keys(answers).map(k => k);
    answered = answerArray.includes(question_id);
  }

  console.info(question, props.users);

  const author = question && props.users[question.author];

  if (!author) {
    return <div>Loading</div>;
  }

  if (answered) {
    return <QuestionStats question={question} user={user} author={author} />;
  }
  return (
    // <Container>
    <React.Fragment>
      <AuthenticationCheck />
      <AnswerQuestionComponent question={question} author={author} />
    </React.Fragment>

    // </Container>
  );
};

const mapStateToProps = (state: StoreState) => {
  let user: User | undefined;
  if (state.utils.id) {
    user = state.users[state.utils.id];
  }
  return {
    user,
    questions: state.questions,
    users: state.users,
  };
};

export default connect(mapStateToProps)(QuestionPage);
