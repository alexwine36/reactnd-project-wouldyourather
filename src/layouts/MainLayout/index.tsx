import { Avatar, Hr } from 'mabrg-ui';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { pages } from '../../pages';
import { handleLogout } from '../../store/actions/utils';
import styled from '../../theme';
import NavContainer from '../NavLayout';

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavHr = styled(Hr)`
  border: 1px solid ${props => props.theme.color!.primary};
`;

const BodyContainer = styled.div`
  background: ${props => props.theme.palette!.primary[7]};
  min-height: calc(100vh - 48.19px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

const Navigation = (props: { id?: string; dispatch: any }) => {
  // console.info(props);
  return (
    <NavBox>
      <NavContainer>
        <NavLink exact={true} to={pages.home.path} activeClassName="active">
          Home
        </NavLink>
        <NavLink
          exact={true}
          to={pages.newQuestion.path}
          activeClassName="active"
        >
          New
        </NavLink>
        <NavLink exact={true} to={pages.leader.path} activeClassName="active">
          Leader
        </NavLink>
      </NavContainer>
      <NavContainer>
        {props.id ? (
          // <NavLink
          //   exact={true}
          //   to="/sign-out"
          //   className="sign-out"
          //   activeClassName="active"
          // >
          // TODO Add the name of the logged in user to the page
          <button
            onClick={() => {
              console.info('Pressed');
              props.dispatch(handleLogout());
            }}
          >
            <Avatar size={32} transparent={true} icon="exit_to_app" />
          </button>
        ) : (
          // </NavLink>
          <NavLink exact={true} to={pages.login.path} activeClassName="active">
            <Avatar size={32} transparent={true} icon="account_circle" />
          </NavLink>
        )}
      </NavContainer>
    </NavBox>
  );
};

interface Props {
  children: ReactNode;
  id?: string;
  dispatch: any;
}

const MainLayout = (props: Props) => (
  <React.Fragment>
    <nav>
      <Navigation id={props.id} dispatch={props.dispatch} />
      <NavHr base="primary" />
    </nav>

    <BodyContainer>{props.children}</BodyContainer>
  </React.Fragment>
);

const mapStateToProps = (state: {
  utils: {
    id?: string;
  };
}) => {
  // console.info('State', state);

  return {
    id: state.utils.id,
  };
};

export default connect(mapStateToProps)(MainLayout);
