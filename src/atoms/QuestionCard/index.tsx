import { Avatar, Card, Heading } from 'mabrg-ui';
import React, { ReactNode } from 'react';
import { CenteredContainer } from '../../atoms';
import { User } from '../../store/reducers/users';

const QuestionCard = (props: { children: ReactNode; author: User }) => {
  const { author } = props;
  return (
    <Card
      style={{
        maxWidth: 500,
        width: '80%',
      }}
    >
      <Card.Primary outline={true}>
        <Heading level={4}>{author.name} asks:</Heading>
      </Card.Primary>
      <Card.Secondary>
        <CenteredContainer>
          <Avatar m={4} image={author.avatarURL} size={72} />
        </CenteredContainer>
        <Heading level={4}>Would You Rather?</Heading>
        <div
          style={{
            margin: '1em 0',
          }}
        >
          {props.children}
        </div>
      </Card.Secondary>
    </Card>
  );
};

export default QuestionCard;
