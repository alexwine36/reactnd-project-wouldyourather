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
  // console.info('PROPS', props);
  // let quest = [];
  // if (props.questions) {
  //   quest = Object.keys(props.questions).map(k => props.questions![k]);
  //   console.log(quest);

  //   // quest = Object.keys(props.questions)
  //   //   .map(q => props.questions[q])
  //   //   .sort((a, b) => {
  //   //     const qA = props.questions[a];
  //   //     const qB = props.questions[b];
  //   //     if (qA.timestamp < qB.timestamp) {
  //   //       return -1;
  //   //     }
  //   //     if (qA.timestamp > qB.timestamp) {
  //   //       return 1;
  //   //     }
  //   //     return 0;
  //   //   });
  //   // console.log(quest);
  // }

  const { user, questions } = props;
  let unansweredQuestions: Question[] = [];
  let answeredQuestions: Question[] = [];

  if (user && questions) {
    const questArray = Object.keys(questions)
      .map(k => questions[k])
      .sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        }
        if (a.timestamp < b.timestamp) {
          return 1;
        }
        return 0;
      });
    const answeredArray = Object.keys(user.answers).map(k => k);
    answeredQuestions = questArray.filter(e => {
      return answeredArray.includes(e.id) && e;
    });
    const aqArray = answeredQuestions.map(e => e.id);
    unansweredQuestions = questArray.filter(e => {
      return !aqArray.includes(e.id) && e;
    });
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
