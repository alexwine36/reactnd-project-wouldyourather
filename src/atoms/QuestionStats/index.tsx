import { Avatar, Card, Heading } from 'mabrg-ui';
import React from 'react';
import { CenteredContainer, OptionStats } from '../../atoms';
import { Question } from '../../store/reducers/questions';
import { User } from '../../store/reducers/users';

interface Props {
  user?: User;
  question: Question;
  author: User;
}

const QuestionStats = (props: Props) => {
  console.log(props);
  const { author, question, user } = props;
  const options = ['optionOne', 'optionTwo'];
  const answerMap = options.map(o => {
    const option = question[o];
    return user && option.votes.includes(user.id);
  });
  let total = 0;
  options.forEach(o => {
    total += question[o].votes.length;
  });
  console.log(total);

  return (
    <Card>
      <Card.Primary outline={true}>
        <Heading level={4}>{author.name} asks:</Heading>
      </Card.Primary>
      <Card.Secondary>
        <CenteredContainer>
          <Avatar m={4} size={80} image={author.avatarURL} />
        </CenteredContainer>
        {options.map((o, i) => (
          <OptionStats
            key={o}
            option={question[o]}
            total={total}
            vote={answerMap[i]}
          />
        ))}
      </Card.Secondary>
    </Card>
  );
};

export default QuestionStats;
