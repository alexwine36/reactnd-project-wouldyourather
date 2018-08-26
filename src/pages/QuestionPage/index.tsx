import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store/reducers';

// import { Container } from 'mabrg-ui';
import { AnswerQuestionComponent } from '../../components';
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
    return (
      <div>
        <div>ANSWERED</div>
        ANSWERED Question
      </div>
    );
  }
  return (
    // <Container>
    <AnswerQuestionComponent question={question} author={author} />
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
