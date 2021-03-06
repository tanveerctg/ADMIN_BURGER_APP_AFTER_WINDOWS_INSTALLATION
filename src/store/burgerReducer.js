const initialState = [];

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...state, action.newItem];
    }
    case "REMOVE_ALL": {
      return [];
    }
    case "REMOVE_SELECTED_ITEM": {
      const removeIds = action.items;
      const currentsItems = [...state];
      let result = currentsItems.filter(item => {
        if (removeIds.indexOf(item.id) >= 0) {
          return false;
        } else {
          return true;
        }
      });
      return result;
    }
    case "INITIAL_STATE": {
      return [...action.items];
    }
    case "EDIT_ITEM": {
      return state.map(itm => {
        if (itm.id === action.updatedItem.id) {
          return action.updatedItem;
        } else {
          return itm;
        }
      });
    }

    default:
      return state;
  }
};

export default burgerReducer;
