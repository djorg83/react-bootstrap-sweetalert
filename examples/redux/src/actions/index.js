import * as types from '../constants/ActionTypes';

const addAlert = alert => ({
  type: types.ADD_ALERT,
  alert
});

const removeAlert = id => ({
  type: types.REMOVE_ALERT,
  id
});

export const showAlert = (alertProps) => dispatch => {

  if (!alertProps.id) {
    alertProps.id = '' + Date.now() + Math.random() + Math.random();
  }

  // auto-close on confirm
  if (alertProps.onConfirm) {
    const onConfirm = alertProps.onConfirm;
    alertProps.onConfirm = (...args) => {
      onConfirm(...args);
      closeAlert(alertProps.id)(dispatch);
    }
  } else {
    alertProps.onConfirm = () => closeAlert(alertProps.id)(dispatch);
  }

  // auto-close on cancel
  if (alertProps.onCancel) {
    const onCancel = alertProps.onCancel;
    alertProps.onCancel = (...args) => {
      onCancel(...args);
      closeAlert(alertProps.id)(dispatch);
    }
  } else {
    alertProps.onCancel = () => closeAlert(alertProps.id)(dispatch);
  }

  dispatch(addAlert(alertProps));
};

export const closeAlert = (id) => dispatch => {
  dispatch(removeAlert(id));
};
