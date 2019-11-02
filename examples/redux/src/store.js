import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, compose, createStore} from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history), // root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ...middleware,
    ),
  ),
);
