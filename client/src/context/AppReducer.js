export const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "GET_USERS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
