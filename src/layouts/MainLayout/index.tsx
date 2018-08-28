import { Avatar, Body, Hr } from 'mabrg-ui';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { pages } from '../../pages';
import { handleLogout } from '../../store/actions/utils';
import { StoreState } from '../../store/reducers';
import { User } from '../../store/reducers/users';
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

const Navigation = (props: { id?: string; user?: User; dispatch: any }) => {
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
      <NavContainer className="sign-out">
        {props.id ? (
          [
            <Body key="user" base="primary">
              {props.user && props.user.name}
            </Body>,
            <button
              key="sign-out"
              onClick={() => {
                console.info('Pressed');
                props.dispatch(handleLogout());
              }}
            >
              <Avatar size={32} transparent={true} icon="exit_to_app" />
            </button>,
          ]
        ) : (
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
  user?: User;
}

const MainLayout = (props: Props) => (
  <React.Fragment>
    <nav>
      <Navigation id={props.id} user={props.user} dispatch={props.dispatch} />
      <NavHr base="primary" />
    </nav>

    <BodyContainer>{props.children}</BodyContainer>
  </React.Fragment>
);

const mapStateToProps = (state: StoreState) => {
  // console.info('State', state);
  const { users } = state;
  let user: User | undefined;
  if (state.utils.id) {
    user = users[state.utils.id];
  }
  return {
    id: state.utils.id,
    user,
  };
};

export default connect(mapStateToProps)(MainLayout);
