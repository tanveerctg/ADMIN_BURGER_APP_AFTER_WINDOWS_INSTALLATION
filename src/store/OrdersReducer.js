const initialState = [];

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL__ORDERS": {
      return action.orders;
    }
    default:
      return state;
  }
};

export default orderReducer;
