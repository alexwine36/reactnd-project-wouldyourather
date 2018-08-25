import { Avatar, Body, Button, Card, Heading } from 'mabrg-ui';
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Dispatch } from 'redux';
import { login } from '../../store/actions/utils';
import { Users } from '../../store/reducers/users';
import styled from '../../theme';
import { CenteredContainer } from '../index';

const StyledSelect = styled(Select)`
  width: 100%;
`;

const LoginView = (props: { users: Users; dispatch: Dispatch<any> }) => {
  console.info(props);
  let currentUser = '';
  const options = Object.keys(props.users).map(k => {
    const user = props.users[k];
    return {
      value: user.id,
      label: user.name,
    };
  });
  return (
    <Card>
      <Card.Primary style={{ textAlign: 'center' }}>
        <Heading m={4} level={4}>
          Welcome to the Would You Rather App
        </Heading>
        <Body m={4} optimalWidth={false}>
          Please sign in to continue
        </Body>
      </Card.Primary>
      <Card.Secondary>
        <CenteredContainer column={true}>
          <Avatar
            icon="question_answer"
            size={48}
            style={{ width: '4em', height: '4em' }}
          />
          <Heading m={4} level={4} base="primary">
            Login
          </Heading>
          <StyledSelect
            options={options}
            onChange={(val: { label: string; value: string }) => {
              console.info(val);
              currentUser = val.value;
            }}
          />
          <Button
            style={{
              width: '100%',
            }}
            onClick={() => {
              console.info(currentUser);
              props.dispatch(login(currentUser));
            }}
            m={6}
          >
            Login
          </Button>
        </CenteredContainer>
      </Card.Secondary>
    </Card>
  );
};

const mapStateToProps = (state: { users: Users }) => {
  //   console.info(state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(LoginView);
