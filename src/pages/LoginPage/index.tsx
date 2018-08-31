import { Container } from 'mabrg-ui';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { LoginView } from '../../atoms';

const LoginPage = (props: {
  id?: string;
  location: {
    state: {
      from?: string;
    };
  };
}) => {
  const redirectPage =
    (props.location.state && props.location.state.from) || '/';
  return (
    <Container>
      {props.id && <Redirect to={redirectPage} />}
      <LoginView />
    </Container>
  );
};

const mapStateToProps = (state: {
  utils: {
    id?: string;
  };
}) => ({
  id: state.utils.id,
});

export default connect(mapStateToProps)(LoginPage);
