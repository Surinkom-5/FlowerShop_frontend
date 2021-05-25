const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.data,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.data,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.data,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.data,
      };
    case "SET_ADDRESSES":
      return {
        ...state,
        addresses: action.datas,
      };

    default:
      return state;
  }
};

export default Reducer;
