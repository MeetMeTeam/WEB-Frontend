const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
  UPDATE_NOTIFICATION: "ALERT.UPDATE_NOTIFICATION"
};

export const getActions = (dispatch) => {
  return {
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};
export const setNotification = (content) => {
  return {
    type: alertActions.UPDATE_NOTIFICATION,
    content,
  };
};

export const openAlertMessage = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
