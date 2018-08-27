import React from 'react';
import { OptionStats } from '../../atoms';
import { Question } from '../../store/reducers/questions';
import { User } from '../../store/reducers/users';
import QuestionCard from '../QuestionCard';

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
    <QuestionCard author={author}>
      {options.map((o, i) => (
        <OptionStats
          key={o}
          option={question[o]}
          total={total}
          vote={answerMap[i]}
        />
      ))}
    </QuestionCard>
  );
};

export default QuestionStats;
