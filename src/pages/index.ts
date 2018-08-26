import HomePage from './HomePage';
import LeaderBoardPage from './LeaderBoardPage';
import LoginPage from './LoginPage';
import NewQuestionPage from './NewQuestionPage';
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
    path: '/new',
  },
  leader: {
    component: LeaderBoardPage,
    path: '/leader',
  },
  question: {
    component: QuestionPage,
    path: '/questions/:question_id',
  },
};

export { HomePage, LoginPage, NewQuestionPage, LeaderBoardPage, pages };
