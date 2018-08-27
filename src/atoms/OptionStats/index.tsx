import { Body, Caption, Card, Progress } from 'mabrg-ui';
import React from 'react';
import styled, { css } from '../../theme';

interface StyledCardProps {
  vote: boolean;
}

const StyledCard = styled(Card)`
  ${(props: StyledCardProps) =>
    props.vote
      ? css`
          background-color: ${p => p.theme.palette!.primary[9]};
        `
      : ''};
`;

const percentage = (option: number, total: number) => {
  const dec = option / total;
  return `${dec * 100}%`;
};

const OptionStats = (props: {
  option: {
    text: string;
    votes: string[];
  };
  total: number;
  vote: boolean;
}) => {
  const { option, total, vote } = props;
  const optionVotes = option.votes.length;
  return (
    <StyledCard
      vote={vote}
      mx={4}
      mb={4}
      style={{
        fontSize: '1.25em',
      }}
    >
      <Card.Primary>
        {vote && <Caption>Your answer</Caption>}
        <Body base={vote ? 'primary' : 'black'} emphasis={0} m={4} small={true}>
          {option.text}
        </Body>
      </Card.Primary>
      <Card.Secondary>
        <Progress base="secondary" progress={optionVotes / total} />
        <Body
          m={4}
          style={{
            textAlign: 'center',
          }}
        >
          {optionVotes} out of {total} votes - {percentage(optionVotes, total)}
        </Body>
      </Card.Secondary>
    </StyledCard>
  );
};

export default OptionStats;
