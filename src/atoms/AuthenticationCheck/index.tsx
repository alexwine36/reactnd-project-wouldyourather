import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { pages } from '../../pages';
import { StoreState } from '../../store/reducers';
const AuthenticationCheck = (props: { id?: string; location: any }) => {
  const { id } = props;
  const redirectTo = props.location.pathname || '/';

  return (
    <React.Fragment>
      {!id && (
        <Redirect
          to={{
            pathname: pages.login.path,
            state: {
              from: redirectTo,
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    id: state.utils.id,
  };
};

export default connect(mapStateToProps)(withRouter(AuthenticationCheck));
