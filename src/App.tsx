import { MaterialTheme } from 'mabrg-ui';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import reset from 'styled-reset';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { HomePage, LoginPage } from './pages';
import { handleInitialData } from './store/actions/shared';
import { injectGlobal } from './theme';
import { theme } from './theme';

const globalStyles = () => injectGlobal`
  ${reset};
  hr {
    margin: 0;
  }
`;

interface Props {
  dispatch: Dispatch<any>;
}

class App extends Component<Props> {
  public componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  public render() {
    globalStyles();
    return (
      <Fragment>
        <LoadingBar />
        <MaterialTheme.Provider theme={theme}>
          <Router>
            <Switch>
              <MainLayout>
                <Route component={HomePage} exact={true} path="/" />
                <Route component={LoginPage} exact={true} path="/login" />
              </MainLayout>
            </Switch>
          </Router>
        </MaterialTheme.Provider>
      </Fragment>
    );
  }
}

export default connect()(App);