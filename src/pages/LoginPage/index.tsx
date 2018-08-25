import {
  Container,
  // Heading
} from 'mabrg-ui';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { LoginView } from '../../atoms';

const LoginPage = (props: { id?: string }) => (
  <Container>
    {props.id && <Redirect to="/" />}
    <LoginView />
  </Container>
);

const mapStateToProps = (state: {
  utils: {
    id?: string;
  };
}) => ({
  id: state.utils.id,
});

export default connect(mapStateToProps)(LoginPage);
