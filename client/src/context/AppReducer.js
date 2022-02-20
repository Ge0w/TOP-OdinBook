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
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
