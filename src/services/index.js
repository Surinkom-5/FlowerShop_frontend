import { setProducts, setCategories } from "../actions/common";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:57678/api",
});

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
