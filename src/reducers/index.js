import * as actionTypes from "../actions/actionTypes";

// export type State = {
//   currentUser: User,
//   products: Array<Product>,
//   categories: Array<Category>,
//   cart: Cart,
// };

const defaultState = {
  user: null,
  products: [],
  categories: [],
  cart: null,
  addresses: [],
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

function setUser(state, action) {
  return {
    ...state,
    user: action.user,
  };
}

function setCart(state, action) {
  return {
    ...state,
    cart: action.cart,
  };
}

function setAdresses(state, action) {
  return {
    ...state,
    addresses: action.addresses,
  };
}

export default function AppReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return setCategories(state, action);
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    case actionTypes.SET_CART:
      return setCart(state, action);
    case actionTypes.SET_USER:
      return setUser(state, action);
    case actionTypes.SET_ADRESSES:
      return setAdresses(state, action);
    default:
      return state;
  }
}
