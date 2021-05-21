import { SET_CATEGORIES, SET_PRODUCTS } from "./actionTypes";

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
