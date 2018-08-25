import { Body, Button, Card } from 'mabrg-ui';
import React from 'react';
import { Question } from '../../store/reducers/questions';
import styled from '../../theme';
import QuestionContainer from '../QuestionContainer';

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const QuestionView = (props: {
  answeredQuestions: Question[];
  unansweredQuestions: Question[];
}) => {
  const questions = props.unansweredQuestions;
  return (
    <Card my={4}>
      <Card.Primary outline={true}>
        <OptionContainer>
          <Button style={{ width: '100%' }} text={true}>
            Unanswered
          </Button>
          <Button style={{ width: '100%' }} text={true}>
            Answered
          </Button>
        </OptionContainer>
      </Card.Primary>
      <Card.Secondary>
        {questions.map(q => (
          <QuestionContainer key={q.id} question={q} />
        ))}

        <Body>Sample</Body>
      </Card.Secondary>
    </Card>
  );
};

export default QuestionView;
