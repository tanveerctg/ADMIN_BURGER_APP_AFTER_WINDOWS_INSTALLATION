const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGES": {
      return action.messages;
    }
    default:
      return state;
  }
};

export default orderReducer;
