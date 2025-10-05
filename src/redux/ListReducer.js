const initialState = null;

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST":
      return action.payload;
    case "CLEAR_LIST":
      return null;
    default:
      return state;
  }
};
