import {
  setProducts,
  setCategories,
  setCart,
  setUser,
  setAdresses,
} from "../actions/common";
import * as axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
const axiosInstance = axios.create({
  baseURL: "http://localhost:57678/api",
});

const cookies = new Cookies();

// Egzamples of how api calls may look like:
// GET
// const { data } = await axiosInstance.get(`/products`);
// DELETE
// await axiosInstance.delete(`/${product.id}`);
// POST
// const { data } = await axiosInstance.post("", product);
// PUT
// await axiosInstance.put("", product);

export const GetProducts = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/Products`);
    dispatch(setProducts(data));
  } catch {
    console.log("Error while getting products!");
  }
};

export const GetCategories = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/Categories`);
    await dispatch(setCategories(data));
  } catch {
    console.log("Error while getting categories!");
  }
};

export const GetProduct = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/Products/${id}`);
    return data;
  } catch {
    console.log("Error while getting product!");
  }
};

export const GetProductsByType = async (type) => {
  try {
    const { data } = await axiosInstance.get(`/Products?ProductType=${type}`);
    return data;
  } catch {
    console.log("Error while getting products by type!");
  }
};

export const GetUser = async (dispatch) => {
  if (cookies.get("userToken")) {
    const options = {
      headers: { Authorization: "Bearer " + cookies.get("userToken") },
    };
    axiosInstance.get(`/User/CurrentUser`, options).then(
      (response) => {
        dispatch(setUser(response.data));
      },
      (error) => {
        dispatch(setUser(null));
      }
    );
  } else {
    dispatch(setUser(null));
  }
};

export const GetCart = async (dispatch) => {
  if (cookies.get("cartId")) {
    const options = {
      headers: { cartCookie: cookies.get("cartId") },
    };
    axiosInstance.get(`/ShoppingCart`, options).then(
      (response) => {
        dispatch(setCart(response.data));
      },
      (error) => {
        dispatch(setCart(null));
      }
    );
  } else {
    axiosInstance.get(`/ShoppingCart`).then(
      (response) => {
        cookies.set("cartId", response.data.cartId, { path: "/" });
        dispatch(setCart(response.data));
      },
      (error) => {
        dispatch(setCart(null));
      }
    );
  }
};

export const GetAddresses = async (dispatch) => {
  if (cookies.get("userToken")) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      const { data } = await axiosInstance.get(`/Address`, options);
      dispatch(setAdresses(data));
      return data;
    } catch {
      console.log("Error while getting Addresses!");
    }
  }
};

export const UpdateAddress = async (id, newAdress) => {
  const cookie = cookies.get("userToken");
  if (cookie) {
    try {
      const options = {
        headers: { Authorization: "Bearer " + cookie },
      };
      await axiosInstance.patch(`/Address/${id}`, newAdress, options);
    } catch {
      console.log("Error while updating Address!");
    }
  }
};

export const AddToCart = async (data) => {
  const cookie = cookies.get("cartId");
  if (cookie) {
    try {
      const options = {
        headers: { cartCookie: cookies.get("cartId") },
      };
      await axiosInstance.patch(`/ShoppingCart`, data, options);
    } catch {
      console.log("Error while adding To Cart!");
    }
  }
};
