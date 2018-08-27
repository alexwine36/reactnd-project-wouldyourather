import { Avatar, Body, Card, Heading, Li, Ul } from 'mabrg-ui';
import React from 'react';
import { CenteredContainer } from '../../atoms';
import { LeaderUser } from '../../pages/LeaderBoardPage';
import styled from '../../theme';
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const TotalContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color!.primary};
  color: white;
  font-family: ${props => props.theme.fonts!.h4.fontFamily};
  font-weight: ${props => props.theme.fonts!.h4.fontWeight};
  font-size: 1.25em;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  margin: 0.5em;
`;

const LeaderBoardUser = (props: { user: LeaderUser }) => {
  const { user } = props;
  const total = user.answerCount + user.createdCount;
  return (
    <Card
      my={4}
      style={{
        maxWidth: 500,
        width: '80vw',
      }}
    >
      <Card.Primary>
        <HeaderContainer>
          <Avatar image={user.avatarURL} size={72} />
          <Heading mx={4} level={4}>
            {user.name}
          </Heading>
        </HeaderContainer>
      </Card.Primary>
      <Card.Secondary>
        <HeaderContainer>
          <div
            style={{
              width: '100%',
            }}
          >
            <Ul underline={true}>
              <Li>
                <span>Answered</span>
                <span />
                <span>{user.answerCount}</span>
              </Li>
              <Li>
                <span>Created</span>
                <span />
                <span>{user.createdCount}</span>
              </Li>
            </Ul>
          </div>
          <Card mt={2}>
            <CenteredContainer
              style={{
                marginTop: '.5em',
                borderBottom: '1px solid rgba(0,0,0,0.28)',
              }}
            >
              <Body small={true}>Score</Body>
            </CenteredContainer>
            <Card.Secondary>
              <TotalContainer>{total}</TotalContainer>
            </Card.Secondary>
          </Card>
        </HeaderContainer>
      </Card.Secondary>
    </Card>
  );
};

export default LeaderBoardUser;
