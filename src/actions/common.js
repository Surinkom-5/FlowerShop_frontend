import { SET_CART, SET_CATEGORIES, SET_PRODUCTS, SET_USER } from "./actionTypes";

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories,
  };
}

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    products,
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function setCart(cart) {
  return {
    type: SET_CART,
    cart,
  };
}
