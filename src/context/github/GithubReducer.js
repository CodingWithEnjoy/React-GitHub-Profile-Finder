export const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  GET_USERS: "GET_USERS",
  CLEAR_USERS: "CLEAR_USERS",
  GET_USER: "GET_USER",
  GET_REPOS: "GET_REPOS",
  GET_USER_AND_REPOS: "GET_USER_AND_REPOS",
};

function githubReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ACTIONS.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
}

export default githubReducer;
