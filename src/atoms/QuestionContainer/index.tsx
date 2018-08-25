import { Avatar, Body, Button, Card, Heading } from 'mabrg-ui';
import React from 'react';
import { connect } from 'react-redux';
import { Question } from '../../store/reducers/questions';
import { Users } from '../../store/reducers/users';
import styled from '../../theme';

const OverviewContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  & > div {
    /* flex: 1 0 auto; */
  }
`;

const QuestionContainer = (props: { question: Question; users: Users }) => {
  const { question, users } = props;
  const author = users[question.author];
  return (
    <Card my={4}>
      <Card.Primary>
        <Heading level={4}>{author.name} asks:</Heading>
      </Card.Primary>
      <Card.Secondary>
        <OverviewContainer>
          <Avatar
            //   image={author.avatarURL}
            m={4}
            size={64}
            image="https://t3.ftcdn.net/jpg/01/46/25/64/500_F_146256441_XsREP0k21eqvYWAMLGwthay9FIEb4xtR.jpg"
          />
          <div>
            <Heading level={5}>Would you rather</Heading>
            <Body>
              ...
              {question.optionOne.text}
              ...
            </Body>
          </div>
        </OverviewContainer>
      </Card.Secondary>
      <Card.Actions>
        <Card.ActionIcons>
          <Button outline={true}>View</Button>
        </Card.ActionIcons>
      </Card.Actions>
    </Card>
  );
};

const mapStateToProps = (state: { users: Users }) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(QuestionContainer);
