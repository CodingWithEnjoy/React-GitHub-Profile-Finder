export const ACTIONS = {
  SET_ALERT: "SET_ALERT",
  REMOVE_ALERT: "REMOVE_ALERT",
};

function alertReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ALERT:
      return action.payload;
    case ACTIONS.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
}

export default alertReducer;
