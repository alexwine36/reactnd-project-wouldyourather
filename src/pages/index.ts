import HomePage from './HomePage';
import LeaderBoardPage from './LeaderBoardPage';
import LoginPage from './LoginPage';
import NewQuestionPage from './NewQuestionPage';
import NotFoundPage from './NotFoundPage';
import QuestionPage from './QuestionPage';

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
    path: '/add',
  },
  leader: {
    component: LeaderBoardPage,
    path: '/leaderboard',
  },
  question: {
    component: QuestionPage,
    path: '/questions/:question_id',
  },
};

export {
  HomePage,
  LoginPage,
  NewQuestionPage,
  LeaderBoardPage,
  NotFoundPage,
  pages,
};
