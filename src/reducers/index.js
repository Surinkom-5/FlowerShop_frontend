import * as actionTypes from "../actions/actionTypes";

// export type State = {
//   currentUser: User,
//   products: Array<Product>,
//   categories: Array<Category>,
//   cart: Cart,
// };

const defaultState = {
  currentUser: null,
  products: [],
  categories: [],
  cart: null,
};

function setCategories(state, action) {
  return {
    ...state,
    categories: action.categories,
  };
}

function setProducts(state, action) {
  return {
    ...state,
    products: action.products,
  };
}

export default function AppReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return setCategories(state, action);
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    default:
      return state;
  }
}
