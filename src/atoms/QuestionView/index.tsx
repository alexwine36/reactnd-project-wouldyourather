import { Button, Card } from 'mabrg-ui';
import React, { Component } from 'react';
import { Question } from '../../store/reducers/questions';
import styled from '../../theme';
import QuestionContainer from '../QuestionContainer';

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
class QuestionView extends Component<{
  answeredQuestions: Question[];
  unansweredQuestions: Question[];
}> {
  public state = {
    answered: false,
  };

  public handleSetChange = (val: boolean) => {
    this.setState(() => ({
      answered: val,
    }));
  };

  public render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    const { answered } = this.state;

    const questions = answered ? answeredQuestions : unansweredQuestions;
    return (
      <Card my={4}>
        <Card.Primary outline={true}>
          <OptionContainer>
            <Button
              style={{ width: '100%' }}
              base={!answered ? 'secondary' : 'primary'}
              text={true}
              onClick={() => this.handleSetChange(false)}
            >
              Unanswered
            </Button>
            <Button
              style={{ width: '100%' }}
              base={answered ? 'secondary' : 'primary'}
              onClick={() => this.handleSetChange(true)}
              text={true}
            >
              Answered
            </Button>
          </OptionContainer>
        </Card.Primary>
        <Card.Secondary>
          {questions.map(q => (
            <QuestionContainer key={q.id} question={q} />
          ))}
        </Card.Secondary>
      </Card>
    );
  }
}

// const QuestionView = (props: {

// }) => {

//   );
// };

export default QuestionView;
