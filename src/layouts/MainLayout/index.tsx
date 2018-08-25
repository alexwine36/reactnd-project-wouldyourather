import { Avatar, Hr } from 'mabrg-ui';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { pages } from '../../pages';
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
`;

const Navigation = (props: { id?: string }) => {
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
        <NavLink exact={true} to="/leader" activeClassName="active">
          Leader
        </NavLink>
      </NavContainer>
      <NavContainer>
        {props.id ? (
          <NavLink
            exact={true}
            to="/sign-out"
            className="sign-out"
            activeClassName="active"
          >
            <Avatar size={32} transparent={true} icon="exit_to_app" />
          </NavLink>
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
}

const MainLayout = (props: Props) => (
  <React.Fragment>
    <nav>
      <Navigation id={props.id} />
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
