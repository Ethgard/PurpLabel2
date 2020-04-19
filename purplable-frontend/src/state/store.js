import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers';
import {localStorage, authentication, analytics, searchMiddleware} from './middlewares';

const composeEnhancers = (window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({trace: true})) ||
  compose;

const rootMiddleware = [
  thunkMiddleware,
  localStorage,
  authentication,
  analytics,
  searchMiddleware
];

const initStore = () => createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...rootMiddleware))
);

export default initStore;
