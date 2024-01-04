const INIT_STATE = {
  carts: [],
};

export const cardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, carts: [...state.type, action.payload] };
    default:
      return state;
  }
};
