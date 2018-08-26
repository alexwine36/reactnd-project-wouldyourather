import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { pages } from '../../pages';
import { StoreState } from '../../store/reducers';
const AuthenticationCheck = (props: { id?: string }) => {
  const { id } = props;
  return (
    <React.Fragment>{!id && <Redirect to={pages.login.path} />}</React.Fragment>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    id: state.utils.id,
  };
};

export default connect(mapStateToProps)(AuthenticationCheck);
