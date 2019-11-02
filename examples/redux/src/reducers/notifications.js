import {
  ADD_ALERT,
  REMOVE_ALERT,
} from '../constants/ActionTypes';

const initialState = {
  alerts: [],
};

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.alert]
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: [...state.alerts].filter(a => a.id !== action.id)
      };
    default:
      return state;
  }
};

export const getVisibleAlert = (state) => (state.alerts && state.alerts.length > 0) ? state.alerts[0] : null;

export default alerts;