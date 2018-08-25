import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from './logger';

const composeEnhancers = composeWithDevTools;

export default composeEnhancers(applyMiddleware(thunk, logger));
