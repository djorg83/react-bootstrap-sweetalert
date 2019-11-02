import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import notifications from './notifications';

export default (history) => combineReducers({
  router: connectRouter(history),
  notifications,
});
