import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NewQuestionPage from './NewQuestionPage';

const pages = {
  home: {
    component: HomePage,
    path: '/',
  },
  login: {
    component: LoginPage,
    path: '/login',
  },
  newQuestion: {
    component: NewQuestionPage,
    path: '/new',
  },
};

export { HomePage, LoginPage, NewQuestionPage, pages };
